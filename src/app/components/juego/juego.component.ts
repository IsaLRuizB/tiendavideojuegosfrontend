import { Component, OnInit } from '@angular/core';
import { JuegoService } from './juego.service';
import { Juego } from '../../models/juego';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {
  public juegos:  Juego[]= [];
  public datosJuego: Juego;

  constructor(private juegoService: JuegoService) { 
    this.datosJuego= new Juego();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("nombre"+ this.datosJuego.titulo);

    this.juegoService.listarXtitulo(this.datosJuego.titulo)
    .subscribe(
      (data) => { // Success
        this.juegos = <any>data;
        console.log(this.juegos);
      },
      (error) => {
        console.error(error);
      }
    );

  }

}
