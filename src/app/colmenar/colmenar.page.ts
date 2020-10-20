import { Component, OnInit } from '@angular/core';
import { ApiarioService } from '../service/apiario.service'; 
import { Apiario } from '../model/apiario';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-colmenar',
  templateUrl: './colmenar.page.html',
  styleUrls: ['./colmenar.page.scss'],
})
export class ColmenarPage implements OnInit {
  
  private apiarios; 
  
  constructor(private apiSrv: ApiarioService,
    private alContrl: AlertController,
    private lodading: LoadingController) {
    //this.apiarios = apiSrv.obtenerTodos();
   }


  public async ngOnInit() {

    const loading = await this.lodading.create();   
    loading.present();

    this.apiSrv.obtenerTodos().subscribe(datos => {
      
      this.apiarios = datos
      loading.dismiss();
    });
  }

}
