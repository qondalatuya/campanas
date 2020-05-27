import {Injectable} from "@angular/core";

import {Operativo} from "@app/models/operativo";
import { Observable,of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl,httpHeader } from './global';
import { Ficha } from '@app/models/ficha';

@Injectable()
export class OperativoService{

	public operativoAgregado$:Subject<Operativo>= new Subject();

	constructor (
		private _http:HttpClient
	){}

	agregar$(operativo:Operativo){
		let headers = new HttpHeaders().set('Content-Type','application/json');
		return this._http.post<Operativo>(apiUrl+"operativos/agregar",JSON.stringify(operativo),{headers});
	}

	listar$(){
		return this._http.get<Operativo[]>(apiUrl+"operativos");
	}

	obtenerOperativo$(id:number){
		return this._http.get<Operativo>(apiUrl+"operativos/"+id);
	}

	agregarFicha$(ficha:Ficha){
		let headers = new HttpHeaders().set('Content-Type','application/json');
		return this._http.post<Ficha>(apiUrl+"fichas/"+ ficha.operativo.id +"/agregar",JSON.stringify(ficha),{headers});
	}
	

}

