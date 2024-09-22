import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import {CookieService} from "ngx-cookie-service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Obtenha o token do cookie
    const token = this.cookieService.get('usuario-logado');

    // Clone a requisição e adicione o cabeçalho Authorization se o token estiver presente
    if (token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(authReq);
    }

    // Se não houver token, continue com a requisição original
    return next.handle(req);
  }
}
