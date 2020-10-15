import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {

   // path: 'colmenar',
   // loadChildren: () => import('./colmenar/colmenar.module').then(m => m.ColmenarPageModule)
    
    
   path: 'colmenar',
    children: [{
      path: "", 
      loadChildren: () => import('./colmenar/colmenar.module').then( m => m.ColmenarPageModule)
    },
    {
      path: ":id", 
      loadChildren: () => import('./apiario/apiario.module').then( m => m.ApiarioPageModule)
    }]
    
  },
  {
    path: 'apiario',
    loadChildren: () => import('./apiario/apiario.module').then( m => m.ApiarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
