import {Component} from "@angular/core";

import {Operativo} from "@app/models/operativo";

import {OperativoService} from "@app/services/operativo.service";
import {DataFactory} from "@app/services/datafactory";
import { Provincia } from '@app/models/provincia';
import { Localidad } from '@app/models/localidad';
import { TipoCampana } from '@app/models/tipocampana';

@Component({
	selector: "operativo-form",
	templateUrl: "operativo.form.component.html"
})
export class OperativoFormComponent{
		
	public tiposCampanas:TipoCampana[];
	public provincias:Provincia[];
	public localidades:Localidad[];
	public nuevoOperativo:Operativo;
	
	constructor(
		private _operativoService:OperativoService,
		private _dataFactory:DataFactory
		)
	{
		this.nuevoOperativo=new Operativo(0,null,null,null,null,null,null,false,null);
	}

	ngOnInit(){
		
		this._dataFactory.getTiposCampanas$().subscribe(
			result =>{
				this.tiposCampanas=result;
			},
			error=>{ 
				console.log(<any>error)
			}
		)
		this._dataFactory.getProvincias$().subscribe(
			result =>{
				this.provincias=result;
			},
			error =>{
				console.log(<any>error);
			}
		)
	}

	onSubmit(){
			this._operativoService.agregar$(this.nuevoOperativo).subscribe(
				result =>{
					this._operativoService.operativoAgregado$.next(result);
					this.nuevoOperativo=new Operativo(0,null,null,null,null,null,null,false,null);			
				},error=>{
					console.log(<any> error)
				}
			)
	}

	actualizarLocalidades(idprovincia:number){
		this._dataFactory.getLocalidades$(idprovincia).subscribe(
			result =>{
				this.localidades=result;
			},
			error=>{
				console.log(<any>error)
			}
		)
	}
}