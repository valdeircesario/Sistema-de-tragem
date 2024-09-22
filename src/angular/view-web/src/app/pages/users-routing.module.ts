import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users.component";
import {AppTriagemComponent} from "./app-triagem/app-triagem.component";
import {AppAgendaconsultaComponent} from "../page-admin/app-agendaconsulta/app-agendaconsulta.component";
import {AppConsultarAgendamentoComponent} from "./app-consultar-agendamento/app-consultar-agendamento.component";



const routes: Routes = [

  {path: 'users', component: UsersComponent,
    children : [
      {path : 'triagem', component : AppTriagemComponent},
      {path : 'agenda', component : AppConsultarAgendamentoComponent}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
