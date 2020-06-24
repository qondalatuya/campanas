import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router"

import { AppComponent } from './app.component';
import {HomeComponent} from "@app/home/home.component";
import {OperativoTableComponent} from "@app/operativos/operativo-table/operativo-table.component";
import {OperativoFormComponent} from "@app/operativos/operativo-form/operativo.form.component";

import {OperativoService} from "@app/services/operativo.service";
import {DataFactory} from "@app/services/datafactory";

import {AppRoutingModule} from "./app.routing.module";
import { OperativosModule } from './operativos/operativos.module';
import { FichasModule } from './fichas/fichas.module';
import { ErrorComponent } from './home/error.component';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    
    OperativosModule,
    FichasModule
    
    
  ],
  exports:[  ],
  providers: [OperativoService,DataFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
