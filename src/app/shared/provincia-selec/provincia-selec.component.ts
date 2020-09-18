import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import {DataFactory} from "../services/datafactory.service";
import { Provincia } from '../models/provincia.interface';
import { NotifierService } from '../services/notifier.service.service';


@Component({
  selector: 'provincia-selec',
  templateUrl: './provincia-selec.component.html',
  styleUrls: ['./provincia-selec.component.css']
})
export class ProvinciaSelecComponent implements OnInit {

  public provincias:Provincia[]=new Array<Provincia>();
  public provincia:Provincia;
  
  @Output()
  public provinciaSeleccionada:EventEmitter<Provincia>=new EventEmitter<Provincia>();

  constructor(
    private _dataFactory:DataFactory,
    private _notifier:NotifierService
    ) 
  { }

  ngOnInit(): void {
    this._dataFactory.getProvincias$().subscribe(
      (result)=>{
        this.provincias=result;
      },
      error=>{
        console.log(error);
      }
    )
  }

  onSelect(){
    this._notifier.cambioProvincia.next(this.provincia);//avisa al notifier
    return this.provinciaSeleccionada.next(this.provincia); //retorna el evento para el @output
  }
}
