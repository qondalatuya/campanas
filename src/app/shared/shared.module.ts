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
import { FormsModule } from '@angular/forms';
import { AfiliadosService } from './services/afiliados.service';
import { BenefBuscadorComponent } from './benef-buscador/benef-buscador.component';
import { BenefDatosComponent } from './benef-datos/benef-datos.component';




@NgModule({
  declarations: [
    FechaPipe,
    BooleanPipe,
    ProvinciaSelecComponent,
    PreviewComponent,
    LocalidadSelecComponent,
    BenefBuscadorComponent,
    BenefDatosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    FechaPipe,
    BooleanPipe,
    ProvinciaSelecComponent,
  ],
  providers:[DataFactory,NotifierService,AfiliadosService]
})
export class SharedModule { }
