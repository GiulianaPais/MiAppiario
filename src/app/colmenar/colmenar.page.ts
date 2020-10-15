import { Component, OnInit } from '@angular/core';
import { ApiarioService } from '../service/apiario.service'; 

@Component({
  selector: 'app-colmenar',
  templateUrl: './colmenar.page.html',
  styleUrls: ['./colmenar.page.scss'],
})
export class ColmenarPage {
  
  private apiarios; 
  
  constructor(private apiSrv: ApiarioService) {
    this.apiarios = apiSrv.obtenerTodos();
   }


  ngOnInit() {
  }

}
