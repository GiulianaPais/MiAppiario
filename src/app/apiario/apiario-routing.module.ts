import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiarioPage } from './apiario.page';

const routes: Routes = [
  {
    path: '',
    component: ApiarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiarioPageRoutingModule {}
