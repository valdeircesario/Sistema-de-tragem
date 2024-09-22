import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminRoutingModule } from './page-admin-routing.module';
import {PageAdminComponent} from "./page-admin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularReporModule} from "../../shared/angular-repor/angular-repor.module";
import {UserListComponent} from "./user-list/user-list.component";
import {MessageService} from "primeng/api";
import {CookieService} from "ngx-cookie-service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "../../shared/filter";
import {PasswordModule} from "primeng/password";
import {ListarTriagemComponent} from "./listar-triagem/listar-triagem.component";
import {AppAgendaconsultaComponent} from "./app-agendaconsulta/app-agendaconsulta.component";
import {ListarConsultasComponent} from "./listar-consultas/listar-consultas.component";







@NgModule({
  declarations: [
    PageAdminComponent,
    UserListComponent,
    ListarTriagemComponent,
    AppAgendaconsultaComponent,
    ListarConsultasComponent


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularReporModule,
    PageAdminRoutingModule,
    PasswordModule
  ],
  providers: [
    MessageService,
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class PageAdminModule { }
