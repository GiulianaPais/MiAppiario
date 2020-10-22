import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, GuardsCheckStart } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { Apiario } from '../model/apiario';
import { ApiarioService } from '../service/apiario.service';


@Component({
  selector: 'app-apiario',
  templateUrl: './apiario.page.html',
  styleUrls: ['./apiario.page.scss'],
})
export class ApiarioPage implements OnInit {
  private apiario = new Apiario();


  constructor(private activeteRoute: ActivatedRoute, 
    private apiSrv: ApiarioService,
    private navCtrl:NavController,
  ) { 
   
   }

 

  ngOnInit() {
    this.activeteRoute.paramMap.subscribe(
      paramMap => {
        this.apiSrv.obtenerPorId(paramMap.get("id"))
          .subscribe(datos => {
            this.apiario = datos;
          });
    });
  }
  onGuardar(){
    
    this.apiSrv.editarApiario(this.apiario)
    .subscribe(
      
      datos=> console.log ("Datos actualizados"),
      er=> console.log (er),
      () => console.log ("Terminado")
    )
  
  }
  onCancelar(){
    this.navCtrl.pop();
  }
}


