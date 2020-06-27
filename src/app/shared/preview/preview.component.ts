import { Component, OnInit } from '@angular/core';
import { Provincia } from '../models/provincia.interface';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  public provincia:Provincia;

  constructor() { }

  ngOnInit(): void {
  }

  cambioProvincia(provincia:Provincia){
    this.provincia=provincia;
  }

}
