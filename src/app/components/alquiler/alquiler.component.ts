import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AlquilerService } from './alquiler.service';
import { Alquiler } from '../../models/alquiler';
import { Cliente } from '../../models/cliente'

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.scss']
})
export class AlquilerComponent implements OnInit {
  public alquiler:  Alquiler[]= [];
  public persona: Cliente;


  constructor(private alquilerService: AlquilerService) {
    this.persona = new Cliente();
   }

  ngOnInit(): void {      
    
  }

  onSubmit(){
    console.log("nombre"+ this.persona.nombre);

    this.alquilerService.generarBalance(this.persona.nombre,this.persona.apellido,this.persona.documento)
    .subscribe(
      (data) => { // Success
        this.alquiler = <any>data;
        console.log(this.alquiler);
      },
      (error) => {
        console.error(error);
      }
    );

  }

}
