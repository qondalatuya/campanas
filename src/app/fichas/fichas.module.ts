import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichasFormComponent } from './fichas-form/fichas-form.component';
import { PersonaFormComponent } from './persona-form/persona-form.component';
import { FichasComponent } from './fichas.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';



@NgModule({
  declarations: [FichasFormComponent, PersonaFormComponent, FichasComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  exports:[FichasComponent]
})
export class FichasModule { }
