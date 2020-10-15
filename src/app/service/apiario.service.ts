import { Injectable } from '@angular/core';
import {Apiario} from '../model/apiario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  
export class ApiarioService {
  private apiarios: Array<Apiario>= [{
    "id": "1",
    "nombre": "María Luisa 1",
    "cantidad": 0,
    "debiles": 0,
    "muertas": 0,
    "ubicacion": "Tostado, Santa Fe",
    "coord": "-29.2862, -61.7766",
    "imagen": "../../assets/ML1.png",
  
  
    

    
  },
    {
      "id": "2",
      "nombre": "María Luisa 2",
      "cantidad": 0,
      "debiles": 0,
      "muertas": 0,
      "ubicacion": "Tostado, Santa Fe",
      "coord": "-29.3040, -60.3040",
      "imagen": "../../assets/ML2.png",
    
    }
  ]

  constructor(private httpClien:HttpClient) { }
  public obtenerTodos() {
    return this.apiarios;
  }
  public obtenerPorId(id: string) {
    for (let api of this.apiarios) {
      if (api.id == id) {
        return api;
      }
    }
  }
  public agregar(api: Apiario) {
    this.apiarios.push(api);
  }

}
