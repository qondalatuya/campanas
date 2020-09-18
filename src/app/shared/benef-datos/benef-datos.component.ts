import { Component, Input, OnInit } from '@angular/core';
import {BeneficiarioComun }from"../models/beneficiario.interface"

@Component({
  selector: 'benef-datos',
  templateUrl: './benef-datos.component.html',
  styleUrls: ['./benef-datos.component.css']
})
export class BenefDatosComponent implements OnInit {

  @Input()
  public beneficiario:BeneficiarioComun;

  constructor() { }

  ngOnInit(): void {
  }

}
