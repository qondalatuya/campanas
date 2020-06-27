import {NgModule} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {OperativosComponent} from "./operativos/operativos.component"
import {FichasComponent} from "./fichas/fichas.component";
import {ErrorComponent}from "./home/error.component";
import { PreviewComponent } from './shared/preview/preview.component';


const routes:Routes=[
    {path:"home",component:HomeComponent},
    {path:"operativos",component:OperativosComponent},
    {path:"fichas/:id",component:FichasComponent},
    {path:"shared",component:PreviewComponent},
    {path:"", component:HomeComponent},
    {path:"**", component:ErrorComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}