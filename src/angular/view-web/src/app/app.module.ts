import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AngularReporModule} from "../shared/angular-repor/angular-repor.module";
import {UsersModule} from "./pages/users.module";
import {PageAdminModule} from "./page-admin/page-admin.module";
import {LoginService} from "./pages-utils/app-login/service/login.service";
import {AppLoginComponent} from "./pages-utils/app-login/app-login.component";
import {MessageService} from "primeng/api";
import {AuthGuard} from "./guard/auth-guard";
import {CookieService} from "ngx-cookie-service";
import {TokenInterceptor} from "../shared/filter";





@NgModule({
    declarations: [
        AppComponent,
        AppLoginComponent

    ],
    imports: [
        BrowserModule,
        UsersModule,
        PageAdminModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AngularReporModule
    ],
    providers: [
      LoginService,
      MessageService,
      AuthGuard,
      CookieService,
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
    ],
  exports: [
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
