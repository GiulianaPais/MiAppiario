import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage {
  private nombre: string;
  private apellido: string;
  private correo: string;
  private contrasenia: string;
  private repcontrasenia: string;

  constructor(public alertCtrl: AlertController) {

  }

  public MostrarAlerta():void {
    
    if (this.contrasenia == this.repcontrasenia) {
      
      this.Alertas("Los datos se han guardado satisfactoriamente.");
    } else {
      this.Alertas("Las contraseñas no coinciden. Intente de nuevo.")
    
    }
  }

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

  

  
  
 
