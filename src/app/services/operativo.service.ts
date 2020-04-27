import {Injectable} from "@angular/core";

import {Operativo} from "@app/models/operativo";
import { Observable,of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl,httpHeader } from './global';

@Injectable()
export class OperativoService{

	public operativoAgregado$:Subject<Operativo>= new Subject();

	constructor (
		private _http:HttpClient
	){}

	agregar$(operativo:Operativo){
		let headers = new HttpHeaders().set('Content-Type','application/json');
		console.log(JSON.stringify(operativo));
		return this._http.post<Operativo>(apiUrl+"operativos/agregar",JSON.stringify(operativo),{headers});
	}

	listar$(){
		return this._http.get<Operativo[]>(apiUrl+"operativos");
	}
	

}

