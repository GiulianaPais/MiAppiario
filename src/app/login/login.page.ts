import { Component, OnInit } from '@angular/core';
import {Usuario} from '../model/usuario';
import { ActivatedRoute, GuardsCheckStart } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { ApiarioService } from '../service/apiario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private usuario =new Usuario();
  //user= { email : 'usuario', password : '1234'};

  constructor(private activeteRoute: ActivatedRoute, 
    private apiSrv: ApiarioService,
    private navCtrl:NavController,) { }

  ngOnInit() {
    
  }
 ingresar(){
    
      this.apiSrv.logearUsuario().subscribe(datos => {
      
        this.usuario = datos
});
    
}
}
