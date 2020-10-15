import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColmenarPageRoutingModule } from './colmenar-routing.module';

import { ColmenarPage } from './colmenar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColmenarPageRoutingModule
  ],
  declarations: [ColmenarPage]
})
export class ColmenarPageModule {}
