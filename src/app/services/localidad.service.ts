import {Injectable} from "@angular/core"

@Injectable()
export class LocalidadService{
	public localidades:string[]=["Resistencia","Cote Lai"];
	
	getLocalidades(){
		return this.localidades;
	}

}