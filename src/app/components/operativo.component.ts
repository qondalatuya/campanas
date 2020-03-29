import {Component} from "@angular/core";

import {Operativo} from "@app/models/operativo";

import {OperativoService} from "@app/services/operativo.service";
import {DataFactory} from "@app/services/datafactory";

@Component({
	selector: "operativo",
	templateUrl: "../views/operativo.component.html"
})
export class OperativoComponent{
	
	public operativos:Operativo[];	
	
	constructor(
		private _operativoService:OperativoService,		
		private _dataFactory:DataFactory
		)
	{
	}

	ngOnInit(){
		this.operativos=this._operativoService.listar();
	}

}