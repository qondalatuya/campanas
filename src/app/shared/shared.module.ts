import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FechaPipe } from './pipes/fechaPipe';
import { BooleanPipe } from './pipes/booleanPipe';
import { ProvinciaSelecComponent } from './provincia-selec/provincia-selec.component';
import {DataFactory} from "./services/datafactory";




@NgModule({
  declarations: [
    FechaPipe,
    BooleanPipe,
    ProvinciaSelecComponent
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
  providers:[DataFactory]
})
export class SharedModule { }
