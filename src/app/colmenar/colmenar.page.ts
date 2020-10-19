import { Component, OnInit } from '@angular/core';
import { ApiarioService } from '../service/apiario.service'; 
import { AlertController, LoadingController } from '@ionic/angular';
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


  public async ngOnInit() {
    this.apiSrv.obtenerTodos().subscribe(datos => {
      
      this.apiarios = datos
     // loading.dismiss();
    });
  }

}
