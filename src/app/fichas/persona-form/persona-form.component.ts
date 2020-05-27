import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Persona } from '@app/models/persona';
import { DataFactory } from '@app/services/datafactory';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'persona-form',
  templateUrl: './persona-form.component.html'
})
export class PersonaFormComponent implements OnInit {

  public nuevaPersona:Persona=new Persona(0,"","",null);
  public dniBusqueda:number;
  public encontrado:boolean= false;
  public buscado:boolean= false;
  
  @Output()
  public seleccionPersona:EventEmitter<Persona> =new EventEmitter<Persona>();

  constructor(
    private _dataFactory:DataFactory
  ) {  }

  ngOnInit(): void {
    
  }

  buscarDNI(){
    this._dataFactory.getPersona$(this.dniBusqueda).subscribe(
      result=>{
        if (result == null){
          this.encontrado=false;
          this.nuevaPersona= new Persona(0,"","",this.dniBusqueda)
        }else{
          this.encontrado=true;
          this.nuevaPersona=result;  
          this.seleccionPersona.emit(result);
        }
        this.buscado=true;               
      },error=>{
        console.log(<any>error);
      }
    );
  }

  agregar(){   
    this._dataFactory.savePersona$(this.nuevaPersona).subscribe(
      result=>{
        this.encontrado=true;
        this.nuevaPersona=result;
        this.seleccionPersona.emit(result);
      },error=>{
        console.log(error);
      }
    )
  }

}
