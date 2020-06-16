import { Provincia } from './provincia';
import { Localidad } from './localidad';
import { TipoCampana } from './tipocampana';
import { Ficha } from './ficha';

export class Operativo{
	constructor(
		public id:number,
		public tipo:TipoCampana,
		public descripcion:string,
		public fechaInicio: string,
		public fechaFin: string,
		public provincia:Provincia,
		public localidad:Localidad,
		public finalizado:boolean,
		public fichas:Ficha[]
		)
	{

	}
}