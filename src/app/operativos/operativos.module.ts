import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperativosComponent } from './operativos.component';
import { OperativoFormComponent} from "./operativo-form/operativo.form.component";
import {OperativoTableComponent} from "./operativo-table/operativo-table.component";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [OperativosComponent,OperativoFormComponent,OperativoTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports: [OperativosComponent]
})
export class OperativosModule { }
