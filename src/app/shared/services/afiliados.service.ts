import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import { Observable } from 'rxjs';

import { BeneficiarioComun } from '../models/beneficiario.interface';
import {APIBUSQUEDABENEFICIARIOPORDNI} from "../values";

@Injectable()
export class AfiliadosService{
    constructor(private _http:HttpClient){}
    
    buscarBeneficiarios$(NumeroDocumento:number):Observable<BeneficiarioComun[]>{
        return this._http.get<BeneficiarioComun[]>(APIBUSQUEDABENEFICIARIOPORDNI+"?Codigo="+NumeroDocumento);        
    }

    // buscarBeneficiario$(NumeroDocumento:number):Observable<Beneficiario>{
    //     var benef;
    //     this.buscarBeneficiario$(NumeroDocumento).subscribe(
    //         result=>{
    //             benef= result;
    //         },
    //         error=>{console.log(error);}
    //     )
    //     return benef;    
    // }
}