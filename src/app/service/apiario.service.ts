import { Injectable } from '@angular/core';
import {Apiario} from '../model/apiario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  
export class ApiarioService {
  

  constructor(private httpClien:HttpClient) { }
  
  public obtenerTodos() {
    return this.httpClien.get<Apiario[]>("http://localhost:3000/apiarios");
  }
  public obtenerPorId(id: string) {
    return this.httpClien.get<Apiario>("http://localhost:3000/apiarios/"+id);
  }
  //public agregar(api: Apiario) {
    //this.apiario.push(api);
 // }

}
