import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../pages-utils/app-login/service/login.service";

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.scss']
})
export class PageAdminComponent {

  sidebarVisible = false;
  dialog = false
  constructor(
    private router : Router, private loginServico : LoginService) {
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  sidebar(){
    this.dialog = true;
  }

  logout(){
    this.loginServico.logout();
  }
}
