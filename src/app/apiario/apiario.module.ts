import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiarioPageRoutingModule } from './apiario-routing.module';

import { ApiarioPage } from './apiario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiarioPageRoutingModule
  ],
  declarations: [ApiarioPage]
})
export class ApiarioPageModule {}
