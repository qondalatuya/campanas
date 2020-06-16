import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaPipe } from './pipes/fechaPipe';
import { BooleanPipe } from './pipes/booleanPipe';
import { ProvinciaSelecComponent } from './provincia-selec/provincia-selec.component';



@NgModule({
  declarations: [
    FechaPipe,
    BooleanPipe,
    ProvinciaSelecComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FechaPipe,
    BooleanPipe
  ]
})
export class SharedModule { }
