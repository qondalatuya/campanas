import {Component, OnInit, OnDestroy} from "@angular/core";
import { Observable, Subscription } from 'rxjs';

import {Operativo} from "@app/models/operativo";

import {OperativoService} from "@app/services/operativo.service";
import {DataFactory} from "@app/services/datafactory";




@Component({
	selector: "operativo-table",
	templateUrl: "operativo-table.component.html"
})
export class OperativoTableComponent implements OnInit,OnDestroy{
	
	public operativos:Operativo[];	
	public subscriptionAgregado:Subscription;
	
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
		this.subscriptionAgregado=this._operativoService.operativoAgregado$.subscribe(
			operativo =>this.operativos.push(operativo)
		)
	}

	ngOnDestroy(){
		this.subscriptionAgregado.unsubscribe();
	}

	public abrirOperativo(operativo){
		console.log(operativo);
		window.open("fichas/" + operativo.id);
	}

	public borrarOperativo(operativo){
		this._operativoService.borrarOperativo$(operativo.id).subscribe(
			result=>{
				//este codigo hay que reemplazar
				this._operativoService.listar$().subscribe(
					result=>{
						this.operativos=result
					},
					error=>{
						console.log(<any>error)
					}
				)	
			},
			error=>{
				console.log(error)
			}
		)
	}

}