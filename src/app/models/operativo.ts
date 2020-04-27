import { Provincia } from './provincia';
import { Localidad } from './localidad';
import { TipoCampana } from './tipocampana';

export class Operativo{
	constructor(
		public tipo:TipoCampana,
		public descripcion:string,
		public fechaInicio: string,
		public fechaFin: string,
		public provincia:Provincia,
		public localidad:Localidad,
		public finalizado:boolean
		)
	{

	}
}