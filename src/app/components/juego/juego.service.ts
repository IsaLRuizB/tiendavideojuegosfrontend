import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from '../../models/juego'

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  
  private baseEndPoint = 'http://localhost:8090/api/juego';
  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(protected http: HttpClient) { }

  public listarXtitulo(titulo: String){
    return this.http.get( this.baseEndPoint+'/'+'buscar'+'/'+titulo);
  }
  

}