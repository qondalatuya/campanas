import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";

import {OperativoTableComponent} from "@app/operativos/operativo-table/operativo-table.component";
import {HomeComponent} from "@app/home/home.component";


const appRoutes: Routes =[
	{path:"", component:HomeComponent},
	{path:"home", component: HomeComponent},
	{path:"operativos", component: OperativoTableComponent },
	{path:"**", component: HomeComponent},
];

export const appRoutingProviders: any[] =[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
