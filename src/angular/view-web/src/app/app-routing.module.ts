import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLoginComponent} from "./pages-utils/app-login/app-login.component";
import {AppCadastrarComponent} from "./pages-utils/app-cadastrar/app-cadastrar.component";


const routes: Routes = [

  //todo paginas publicas

  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: AppLoginComponent},
  {path: 'cadastrar', component: AppCadastrarComponent},


  //todo interface administrador
  {path:'admin',
    loadChildren: () => import('./page-admin/page-admin.module').then(m => m.PageAdminModule)},


  //todo interface de usuário
  {path:'users',
    loadChildren: () => import('./pages/users.module').then(m => m.UsersModule)}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
