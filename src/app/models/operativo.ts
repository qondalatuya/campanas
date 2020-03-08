export class Operativo{
	constructor(
		public tipo:String,
		public descripcion:String,
		public fechaInicio: String,
		public fechaFin: String,
		public provincia:String,
		public localidad:String,
		public finalizado:boolean
		)
	{

	}
}