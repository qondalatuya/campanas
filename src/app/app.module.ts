import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {HomeComponent} from "@app/components/home.component";
import {OperativoComponent} from "@app/components/operativo.component";
import {OperativoFormularioComponent} from "@app/components/operativo.formulario.component";

import {OperativoService} from "@app/services/operativo.service";
import {DataFactory} from "@app/services/datafactory";

import {appRoutingProviders,routing} from "@app/routing";

@NgModule({
  declarations: [
    AppComponent,
    OperativoComponent,
    OperativoFormularioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [appRoutingProviders,OperativoService,DataFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
