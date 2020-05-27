import {Component, OnInit, OnDestroy} from "@angular/core";

import {Operativo} from "@app/models/operativo";

import {OperativoService} from "@app/services/operativo.service";
import {DataFactory} from "@app/services/datafactory";
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: "operativo-table",
	templateUrl: "operativo-table.component.html"
})
export class OperativoTableComponent implements OnInit,OnDestroy{
	
	public operativos:Operativo[];	
	public subscription:Subscription;
	
	constructor(
		public _operativoService:OperativoService,		
		private _dataFactory:DataFactory
		)
	{
	}

	ngOnInit(){
		this._operativoService.listar$().subscribe(
			result=>{
				this.operativos=result
			},
			error=>{
				console.log(<any>error)
			}
		)		
		this.subscription=this._operativoService.operativoAgregado$.subscribe(
			operativo =>this.operativos.push(operativo)
		)
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}

	public abrirOperativo(operativo){
		console.log(operativo);
		window.open("fichas",operativo.id);
	}

}