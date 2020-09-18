import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {BeneficiarioComun}from "../models/beneficiario.interface";
import {AfiliadosService} from "../services/afiliados.service";


@Component({
  selector: 'benef-buscador',
  templateUrl: './benef-buscador.component.html',
  styleUrls: ['./benef-buscador.component.css']
})
export class BenefBuscadorComponent implements OnInit {

  @Output()
  public cambioBeneficiario:EventEmitter<BeneficiarioComun> = new EventEmitter<BeneficiarioComun>();

  public beneficiario:BeneficiarioComun;
  public dniInput;
  public encontrado=true;

  constructor(private _afiliadoService:AfiliadosService) { }

  ngOnInit(): void {
  }

  buscarBeneficiario(){
    this._afiliadoService.buscarBeneficiarios$(this.dniInput).subscribe(
      result=>{
          if (result==null){
            this.encontrado=false                                
          } else{
            this.beneficiario=result[0];
            this.cambioBeneficiario.emit(this.beneficiario)
            this.encontrado=true;          
          }
      },error=>{
        console.log(console.error());
      },
    )
  }

}
