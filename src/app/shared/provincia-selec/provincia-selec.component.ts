import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import {DataFactory} from "../services/datafactory";
import { Provincia } from '../models/provincia.interface';
import { doesNotReject } from 'assert';


@Component({
  selector: 'provincia-selec',
  templateUrl: './provincia-selec.component.html',
  styleUrls: ['./provincia-selec.component.css']
})
export class ProvinciaSelecComponent implements OnInit {

  public provincias:Provincia[]=new Array<Provincia>();
  
  @Output()
  public provinciaSeleccionada:EventEmitter<Provincia>=new EventEmitter<Provincia>();

  constructor(
    private _dataFactory:DataFactory,
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
}
