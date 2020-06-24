import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import{apiOSPRERAProvincias} from "../values"
import {Provincia} from "../models/provincia.interface"
import { Observable } from 'rxjs';

@Injectable()
export class DataFactory{

    constructor(
        private _httpClient: HttpClient,        
    ){}

    getProvincias$():Observable<Provincia[]>{
        return this._httpClient.get<Provincia[]>(apiOSPRERAProvincias);
    }
}