import { BocaExpendio } from './bocaExpendio.interface';

export interface Localidad{
    Id:number,
    Descripcion:string,
    BocaDeExpendio:BocaExpendio,
    DepartamentoId:number,
    DepartamentoProvinciaId:number,
    CodigoPostal:number
}