import {Component} from "@angular/core";

import {Operativo} from "@app/models/operativo";

import {OperativoService} from "@app/services/operativo.service";

@Component({
	selector: "operativo",
	templateUrl: "../views/operativo.component.html",
	providers: [OperativoService]
})
export class OperativoComponent{
	
	public operativos:Operativo[];
	
	constructor(
		private _operativoService:OperativoService
		)
	{}

	ngOnInit(){
		this.operativos=this._operativoService.listar();
		console.log(this._operativoService.listar())
	}
}