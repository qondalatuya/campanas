import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";

import {OperativoComponent} from "@app/components/operativo.component";
import {HomeComponent} from "@app/components/home.component";


const appRoutes: Routes =[
	{path:"", component:HomeComponent},
	{path:"home", component: HomeComponent},
	{path:"operativos", component: OperativoComponent },
	{path:"**", component: HomeComponent},
];

export const appRoutingProviders: any[] =[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
