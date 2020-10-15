import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColmenarPage } from './colmenar.page';

const routes: Routes = [
  {
    path: '',
    component: ColmenarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColmenarPageRoutingModule {}
