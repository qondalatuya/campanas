import {Component} from "@angular/core";

import {Operativo} from "@app/models/operativo";

import {OperativoService} from "@app/services/operativo.service";
import {DataFactory} from "@app/services/datafactory";

@Component({
	selector: "operativoFormulario",
	templateUrl: "../views/operativo.formulario.component.html"
})
export class OperativoFormularioComponent{
	
	public operativos:Operativo[];
	public tiposCampanas:String[];
	public provincias:String[];
	public localidades:String[];
	public nuevoOperativo:Operativo;
	
	constructor(
		private _operativoService:OperativoService,
		private _dataFactory:DataFactory
		)
	{
		this.nuevoOperativo=new Operativo(null,null,null,null,null,null,false);
	}

	ngOnInit(){
		this.operativos=this._operativoService.listar();
		this.localidades=this._dataFactory.getLocalidades();
		this.provincias=this._dataFactory.getProvincias();
		this.tiposCampanas=this._dataFactory.getTiposCampanas();
	}

	onSubmit(){
			console.log(this.nuevoOperativo);
			this._operativoService.agregar(this.nuevoOperativo);
			this.nuevoOperativo=new Operativo(null,null,null,null,null,null,false);	
			console.log(this.operativos);
	}
}