import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"fecha"})
export class FechaPipe implements PipeTransform{
    transform(value){
        var fecha=value.slice(0,10);
        if (fecha =="01/01/0001"){
            return "-"    
        } else{
            return fecha;
        }
        
    }
}