import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colmenar',
  templateUrl: './colmenar.page.html',
  styleUrls: ['./colmenar.page.scss'],
})
export class ColmenarPage {
  
  private apiarios = [{
    "id": 1,
    "nombre": "María Luisa 1",
    "Cantidad": 0,
    "Débiles": 0,
    "Muertas": 0,
    "Causa de muerte": "string",
    //fecha 
    "M/A-colocadas": 0,
    "A-colocadas": 0,
    "Alimetadores": 0,
    "M/A-apilada": 0,
    "A-apilada": 0,
    "Mallas": 0,
    "C/enjambre": 0,
    "Atrapadas": 0,
    //"imagen": 

    
  },
    {
      "id": 2,
      "nombre": "María Luisa 2",
      "Cantidad": 0,
      "Débiles": 0,
      "Muertas": 0,
      "Causa de muerte": "string",
      //fecha 
      "M/A-colocadas": 0,
      "A-colocadas": 0,
      "Alimetadores": 0,
      "M/A-apilada": 0,
      "A-apilada": 0,
      "Mallas": 0,
      "C/enjambre": 0,
      "Atrapadas": 0,
      //"imagen": 
    }
  ]
  
  constructor() { }


  ngOnInit() {
  }

}
