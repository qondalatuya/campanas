import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { OperativosComponent } from './operativos.component';
import { OperativoFormComponent} from "./operativo-form/operativo.form.component";
import {OperativoTableComponent} from "./operativo-table/operativo-table.component";

import {BooleanPipe} from "@app/shared/pipes/booleanPipe";
import { FechaPipe } from '@app/shared/pipes/fechaPipe';
import { SharedModule } from '@app/shared/shared.module';






@NgModule({
  declarations: [
    OperativosComponent,
    OperativoFormComponent,
    OperativoTableComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    SharedModule
    
  ],
  exports: [OperativosComponent]
})
export class OperativosModule { }
