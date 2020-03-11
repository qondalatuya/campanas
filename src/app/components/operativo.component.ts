import {Component} from "@angular/core";

import {Operativo} from "@app/models/operativo";

import {OperativoService} from "@app/services/operativo.service";
import {ProvinciaService} from "@app/services/provincia.service";
import {LocalidadService} from "@app/services/localidad.service";
import {DataFactory} from "@app/services/datafactory";

@Component({
	selector: "operativo",
	templateUrl: "../views/operativo.component.html",
	providers: [OperativoService,ProvinciaService,LocalidadService,DataFactory]
})
export class OperativoComponent{
	
	public operativos:Operativo[];
	public tiposCampanas:String[];
	public provincias:String[];
	public localidades:String[];
	public nuevoOperativo:Operativo;
	
	constructor(
		private _operativoService:OperativoService,
		private _provinciaService:ProvinciaService,
		private _localidadService:LocalidadService,
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
			console.log(this.nuevoOperativo)
	}
}