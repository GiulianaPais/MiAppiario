import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular' ;
import {Usuario} from '../model/usuario';
import { ActivatedRoute, GuardsCheckStart } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { ApiarioService } from '../service/apiario.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage {
  
  private contrasenia: string;
  private repcontrasenia: string;
  private usuario = new Usuario();

  constructor(public alertCtrl: AlertController,
    public apiSrv: ApiarioService) {

  }

  public MostrarAlerta():void {
    
    if (this.contrasenia == this.repcontrasenia) {
      
      this.Alertas("Los datos se han guardado satisfactoriamente.");
      
    } else {
      this.Alertas("Las contraseñas no coinciden. Intente de nuevo.")
    
    }
  }

  /*ingresar(){
    
    this.apiSrv.nuevoUsuario(usuario: Usuario).subscribe(datos => {
    
      this.usuario= datos;

});
  
}*/

async Alertas(msj) {
  const alert = await this.alertCtrl.create({
    cssClass: 'confAlert',
    header: 'Registro de nuevo usuario',
    message: msj,
    buttons: ['Aceptar']
  });
  await alert.present();
}
  

}

  

  
  
 
