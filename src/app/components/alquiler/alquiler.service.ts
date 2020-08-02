import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alquiler } from '../../models/alquiler'

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  private baseEndPoint = 'http://localhost:8090/api/alquiler';
  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(protected http: HttpClient) { }

  public generarBalance(nombre: String, apellido: String, documento: String){
    return this.http.get( this.baseEndPoint+'/'+'filtrar'+'/'+nombre+'/'+apellido+'/'+documento);
  }

  public listar(): Observable<Alquiler[]>{
    return this.http.get<Alquiler[]>(this.baseEndPoint);
  }

}