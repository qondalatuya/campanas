import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {HomeComponent} from "@app/components/home.component";
import {OperativoComponent} from "@app/components/operativo.component";

import {appRoutingProviders,routing} from "@app/routing";

@NgModule({
  declarations: [
    AppComponent,
    OperativoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
