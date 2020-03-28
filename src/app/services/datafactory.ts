import {Injectable} from "@angular/core";

@Injectable()
export class DataFactory{
	public localidades:string[]=["Resistencia","Cote Lai"];
	public provincias:string[]=["Chaco","Corrientes"];
	public tiposCampanas:string[]=["Salud Rural", "Odontologico"];
	
	getLocalidades(){
		return this.localidades;
	}

	getProvincias(){
		return this.provincias;
	}

	getTiposCampanas(){
		return this.tiposCampanas;
	}

}