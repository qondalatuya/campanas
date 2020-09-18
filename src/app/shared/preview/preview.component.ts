import { Component, OnInit } from '@angular/core';
import { BeneficiarioComun } from '../models/beneficiario.interface';
import { Localidad } from '../models/localidad.interface';
import { Provincia } from '../models/provincia.interface';
import { AfiliadosService } from '../services/afiliados.service';
import { NotifierService } from '../services/notifier.service.service';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  public provincia:Provincia;
  public beneficiario:BeneficiarioComun;

  constructor(
    private _notifier:NotifierService,
    private _afiliadosServ:AfiliadosService
  ) { }

  ngOnInit(): void {
    this._notifier.cambioProvincia.subscribe(
      result=>{
        console.log("cambio a de provincia a trraves del notifier" + result.Descripcion)
      }
    )    
  }

  cambioProvincia(provincia:Provincia){
    this.provincia=provincia;
    console.log("cambio provincia a " + provincia.Descripcion);
  }

  cambioLocalidad(localidad:Localidad){
    console.log("cambio de localidad a "+ localidad.Descripcion)
  }

  cambioBeneficiario(benef){
    this.beneficiario=benef;
    console.log("cambio beneficiario");
  }

}
