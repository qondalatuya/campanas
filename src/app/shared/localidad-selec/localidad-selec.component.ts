import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataFactory } from '../services/datafactory.service';
import { Provincia } from '../models/provincia.interface';
import { Subscription } from 'rxjs';
import { NotifierService } from '../services/notifier.service.service';
import { Localidad } from '../models/localidad.interface';

@Component({
  selector: 'localidad-selec',
  templateUrl: './localidad-selec.component.html',
  styleUrls: ['./localidad-selec.component.css']
})
export class LocalidadSelecComponent implements OnInit,OnDestroy {

  //puedo inicializar el componente con una provincia determinada
  @Input()
  public provincia:Provincia

  @Input()//o pasarle una id y que valla a buscar a la API
  public provinciaId:number
 
  //El componente también estará atento a eventos de cambio de provincia en el componente provincia-selec
  private suscripcion:Subscription;

  @Input()//se puede evitar el cambio de provincia seteando esta variable a falso
  public provinciaFija:boolean=false;

  public localidades:Localidad[];
  
  @Output()
  public localidadSeleccionada:EventEmitter<Localidad> = new EventEmitter();
  public localidad:Localidad;

  constructor( private dataFactory:DataFactory, private notifier:NotifierService) {   }  

  ngOnInit(): void {
    if(this.provincia==null){
      if(this.provinciaId !==undefined){
        this.dataFactory.getProvincia$(this.provinciaId).subscribe(
          result=>{
            this.cambiarProvincia(result);
            this.buscarLocalidades();
          },
          error=>{
            console.log(error)
          }
        )
      }
    } else{
      this.buscarLocalidades();
    }
    if(!this.provinciaFija)
      {this.notifier.cambioProvincia.subscribe(
        provincia =>{
          this.cambiarProvincia(provincia);
          this.buscarLocalidades();
        }
      )}   
  }

  cambiarProvincia(prov:Provincia):void{
    this.provincia=prov;
    this.provinciaId=prov.Id;
  }

  buscarLocalidades():void{
    this.dataFactory.getLocalidades$(this.provincia.Id).subscribe(
      result=>{
        this.localidades=result;
      },
      error=>{
        console.log(error);
      }
    )
  }

  onSelect(){
    return this.localidadSeleccionada.next(this.localidad)
  }



  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

}
