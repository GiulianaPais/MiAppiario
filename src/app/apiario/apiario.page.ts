import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiarioService } from '../service/apiario.service';
//import { Apiario } from '../model/apiario';

@Component({
  selector: 'app-apiario',
  templateUrl: './apiario.page.html',
  styleUrls: ['./apiario.page.scss'],
})
export class ApiarioPage implements OnInit {
  private apiario;


  constructor(private activeteRoute: ActivatedRoute, private apiSrv: ApiarioService
  ) { }

 

  ngOnInit() {
    this.activeteRoute.paramMap.subscribe(
      paramMap => {
        this.apiario= this.apiSrv.obtenerPorId(paramMap.get("id"));
        //  .subscribe(datos => {
        //    this.apiario = datos;
        //  });
    });
  }

}
