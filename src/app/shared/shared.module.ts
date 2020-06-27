import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FechaPipe } from './pipes/fechaPipe';
import { BooleanPipe } from './pipes/booleanPipe';
import { ProvinciaSelecComponent } from './provincia-selec/provincia-selec.component';

import {DataFactory} from "./services/datafactory.service";
import {NotifierService} from "./services/notifier.service.service";

import { PreviewComponent } from './preview/preview.component';
import { LocalidadSelecComponent } from './localidad-selec/localidad-selec.component';




@NgModule({
  declarations: [
    FechaPipe,
    BooleanPipe,
    ProvinciaSelecComponent,
    PreviewComponent,
    LocalidadSelecComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    FechaPipe,
    BooleanPipe,
    ProvinciaSelecComponent,
  ],
  providers:[DataFactory,NotifierService]
})
export class SharedModule { }
