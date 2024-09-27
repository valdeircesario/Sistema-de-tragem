import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import {AppTriagemComponent} from "./app-triagem/app-triagem.component";
import {AngularReporModule} from "../../shared/angular-repor/angular-repor.module";
import {MessageService} from "primeng/api";
import {UsersComponent} from "./users.component";
import {AppCadastrarComponent} from "../pages-utils/app-cadastrar/app-cadastrar.component";
import {CookieService} from "ngx-cookie-service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "../../shared/filter";
import { AppConsultarAgendamentoComponent } from './app-consultar-agendamento/app-consultar-agendamento.component';

@NgModule({
    declarations: [
      AppCadastrarComponent,
      AppTriagemComponent,
      UsersComponent,
      AppConsultarAgendamentoComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    FormsModule,
    AngularReporModule,


  ],
  providers : [
    MessageService,
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class UsersModule { }
