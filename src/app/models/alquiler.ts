import { Cliente } from "./cliente";
import { Juego } from "./juego";

export class Alquiler {
     id: number;
     createAt: String;
     fechaEntrega: String;
     estado: String;
     clientes: Cliente[]= [];
     juegos: Juego[]= [];


}
