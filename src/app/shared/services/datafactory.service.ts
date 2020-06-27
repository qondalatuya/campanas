import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import{APIOSPRERAPROVINCIAS} from "../values"
import {Provincia} from "../models/provincia.interface"
import { Observable, Subject } from 'rxjs';
import { Localidad } from '../models/localidad.interface';

@Injectable()
export class DataFactory{

    constructor(
        private _httpClient: HttpClient,        
    ){}

    getProvincias$():Observable<Provincia[]>{
        return this._httpClient.get<Provincia[]>(APIOSPRERAPROVINCIAS);
    }

    getProvincia$( id:number):Observable<Provincia>{
        return this._httpClient.get<Provincia>(APIOSPRERAPROVINCIAS+"/"+id);
    }

    getLocalidades$(idProvincia:number):Observable<Localidad[]>{
        return this._httpClient.get<Localidad[]>(APIOSPRERAPROVINCIAS+"/"+idProvincia+"/Localidades")
    }
}