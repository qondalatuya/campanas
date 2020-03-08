import {Injectable} from "@angular/core";

import {Operativo} from "@app/models/operativo";

@Injectable()
export class OperativoService{

	public operativos:Operativo[];

	constructor(){
		this.operativos = [
		new Operativo("Odontologia", "escuelas del interior","08/03/2020",null,"Chaco","Las Breñas",false),
		new Operativo("Salud rural", "zona urbana","08/03/2020",null,"Chaco","Cote Lai",false)
		]
	}

	agregar(operativo:Operativo){
		this.operativos.push(operativo);
	}

	listar(){
		return this.operativos;
	}
	

	probar(){
		console.log(this.operativos);
	}

}

