import { Persona } from './persona';
import { Operativo } from './operativo';

export class Ficha{
    constructor(
        public id:number,
        public operativo:Operativo,
        public persona:Persona,
        public fechaAtencion
    ){}
}