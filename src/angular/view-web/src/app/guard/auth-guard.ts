import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {LoginService} from "../pages-utils/app-login/service/login.service";
import {AppMessageService} from "../../shared/message-service/message.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private loginService : LoginService,
    private route : Router,
    private message : AppMessageService,
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    if (this.loginService.isAutenticado()){

      debugger
      if(state.url === '/login'){
        this.route.navigate(['admin']);
        return false;
      }

      return true;

    }else{

      debugger
      if(state.url === '/login'){

        return true;
      }

      this.route.navigate(['/login']);
      this.message.showInfo("Usuario não autenticado");
      return false;

    }

  }

};
