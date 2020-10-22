import { Injectable } from '@angular/core';
import {Apiario} from '../model/apiario';
import { HttpClient } from '@angular/common/http';
import {Usuario} from '../model/usuario';

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

  public editarApiario(apiario: Apiario){
    return this.httpClien.put("http://localhost:3000/apiarios/"+apiario.id,apiario);
  }

  public logearUsuario(){
    return this.httpClien.get<Usuario>("http://localhost:3000/login/");
 }
 public nuevoUsuario(usuario: Usuario){
  return this.httpClien.post("http://localhost:3000/login/", usuario);
 }
  
 /* public addApiario (){
    this.apiario = new Apiario();
    this.apiario.nombre = "NuevoApiario";
    this.apiario.cantidad = 0;
    this.apiario.debiles = 0;
    this.apiario.muertas = 0;
    this.apiario.ubicacion= "dsds";
    this.apiario.coord= "56545";
    this.apiario.imagen= "html";
    this.ApiarioService.addPApiario (this.apiario)
    .subscribe (
      nuevo => console.log (nuevo)
    );
  }*/

}
