import { Provincia } from './provincia';

export class Localidad {
    constructor(
        public id:number,
        public nombre:string,
        public provincia:Provincia
    )
    {}
}