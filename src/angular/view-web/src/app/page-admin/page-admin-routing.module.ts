import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PageAdminComponent} from "./page-admin.component";
import {UserListComponent} from "./user-list/user-list.component";
import {AuthGuard} from "../guard/auth-guard";
import {ListarTriagemComponent} from "./listar-triagem/listar-triagem.component";
import {AppAgendaconsultaComponent} from "./app-agendaconsulta/app-agendaconsulta.component";
import {ListarConsultasComponent} from "./listar-consultas/listar-consultas.component";




const routes: Routes = [

  {path: 'admin', component: PageAdminComponent,
    canActivate : [AuthGuard],
    children : [
      {path : 'usuario', component : UserListComponent,
        canActivate : [AuthGuard]
      },
      {path : 'list-triagem', component : ListarTriagemComponent,
        canActivate : [AuthGuard]
      },
      {path : 'add-consulta', component : AppAgendaconsultaComponent,
        canActivate : [AuthGuard]
      },
      {path : 'list-consulta', component : ListarConsultasComponent,
        canActivate : [AuthGuard]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAdminRoutingModule { }
