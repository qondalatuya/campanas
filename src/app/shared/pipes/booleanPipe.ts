import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"siono"})
export class BooleanPipe implements PipeTransform{
    transform(value){
        return value? "Si":"No";
    }
}