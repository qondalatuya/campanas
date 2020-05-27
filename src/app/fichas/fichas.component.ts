import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, UrlHandlingStrategy} from "@angular/router"

import { Persona } from '@app/models/persona';
import { Ficha } from '@app/models/ficha';
import { OperativoService } from "../services/operativo.service"
import { Operativo } from '@app/models/operativo';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html'
})
export class FichasComponent implements OnInit {

  public operativo:Operativo=new Operativo(0,null,null,null,null,null,null,null,null)
  public date:Date = new Date();

  constructor(
    private _route:ActivatedRoute,
    private _operativoService:OperativoService
  ) 
  {   }

  ngOnInit(): void {
    this._operativoService.obtenerOperativo$(this._route.snapshot.params.id).subscribe(
      result=>{
        this.operativo=result;
        console.log(this.operativo);
      },
      error=>{
        console.log(error);
        //TODO redireccionar a la pantalal de error
      }
    )
  }

  fichaAgregada(ficha){
    this.operativo.fichas.push(ficha);
  }

  probar(){
    
    console.log(this.date);
    console.log(this.date.getDay);
    console.log(this.date.getMonth);
    console.log(new Date(this.date));
  }

}
