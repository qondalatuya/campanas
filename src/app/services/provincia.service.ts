import {Injectable} from "@angular/core";

@Injectable()
export class ProvinciaService{
	public provincias:string[]=["Chaco","Corrientes"];

	getProvincias(){
		return this.provincias;
	}
}
