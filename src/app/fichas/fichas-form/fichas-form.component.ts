import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '@app/models/persona';
import { Ficha } from '@app/models/ficha';
import { Operativo } from '@app/models/operativo';
import { OperativoService } from '@app/services/operativo.service';

@Component({
  selector: 'fichas-form',
  templateUrl: './fichas-form.component.html'
})
export class FichasFormComponent implements OnInit {

  public ficha:Ficha=new Ficha (0,null,null,null);
  
  @Input()
  public operativo:Operativo;

  @Output()
  private fichaAgregada:EventEmitter<Ficha> = new EventEmitter<Ficha>();

  constructor(
    private _operativoService:OperativoService
    ) { 
    }

  ngOnInit(): void {
  }

  setPersona(persona:Persona){
    this.ficha.persona=persona;
  }

  guardarFicha(){
    this.ficha.operativo=this.operativo;
    console.log(this.ficha)
    this._operativoService.agregarFicha$(this.ficha).subscribe(
      result=>{
        console.log(result)
        this.ficha=new Ficha (0,null,null,null);
        this.fichaAgregada.emit(result);
      },
      error=>{
        console.log(error)
      }
    )
  }



}
