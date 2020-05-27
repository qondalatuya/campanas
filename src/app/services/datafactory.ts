import {Injectable} from "@angular/core";
import {HttpClient,HttpClientModule, HttpHeaders} from "@angular/common/http";

import {apiUrl} from "./global"
import {Provincia} from "../models/provincia"
import { Localidad } from '@app/models/localidad';
import { TipoCampana } from '@app/models/tipocampana';
import { Persona } from '@app/models/persona';


@Injectable()
export class DataFactory{
	constructor(		
		private _http:HttpClient
	){}
	
	getLocalidades$(idprovincia:number){
		return (this._http.get<Localidad[]>(apiUrl+"lugares/"+idprovincia+"/localidades"));
	}

	getProvincias$(){
		return this._http.get<Provincia[]>(apiUrl+"lugares/provincias");
	}

	getTiposCampanas$(){
		return (this._http.get<TipoCampana[]>(apiUrl+"operativos/tiposcampanas"));
	}

	getPersona$( dni:number){
		return(this._http.get<Persona>(apiUrl+"personas/dni/"+dni))
	}

	savePersona$( persona:Persona){
		let headers = new HttpHeaders().set('Content-Type','application/json');
		let body=JSON.stringify(persona);
		return(this._http.post<Persona>(apiUrl+"personas/agregar",body,{headers}))
	}

}