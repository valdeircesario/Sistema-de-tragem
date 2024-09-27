import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoginDTO} from "../../../../model/dto/login/login-dto";
import {AppMessageService} from "../../../../shared/message-service/message.service";
import {LocalStorageService} from "../../../../shared/localStorage/localStorage";



@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private http: HttpClient,
    private router: Router,
    private storage : LocalStorageService,
    private messagemService :AppMessageService
  ) {
  }

  text : any;
  dados = new LoginDTO;

  efetuarLogin(record: LoginDTO) {
    this.http.post<any>(`http://localhost:8080/login`, record, {
      observe: 'response',
      responseType: 'text' as 'json',
      withCredentials: true // Permite que cookies sejam enviados e recebidos
    })
      .subscribe(
        (response: HttpResponse<any>) => {
          if (response.status === 200) {


            //todo rotear o usuário com base no seu perfil

            console.log('Response Body:', response.body);
            this.storage.armazenarLoginUser(response.body);
            this.text = response.body;
            console.log(this.text)
            if(response.body === 'Administrador') {
              this.messagemService.showSuccess("Sucesso!")
              this.router.navigate(['/admin']);
            }
            else{
              this.messagemService.showSuccess("Sucesso!")
              this.router.navigate(['/users']);
            }

          }
        },
        (error) => {
          console.log('Error Status:', error.status);
          console.log('Error Body:', error.error);
          this.messagemService.showError(error.error)
        }
      );
  }

  logout(){
    this.http.head(`http://localhost:8080/login`, {
      observe: 'response',
      responseType: 'text' as 'json',
      withCredentials: true
    })
      .subscribe(
        (response: HttpResponse<any>) => {
          if (response.status === 200) {

            console.log('Response Body:', response.body);
            console.log(response)
            this.router.navigate([ '/login']);
            this.storage.removerLoginUser();
          }
        },
        (error) => {
          console.log('Error Status:', error.status);
          console.log('Error Body:', error.error);
          this.messagemService.showError(error.error)
        }
      );

  }


  isAutenticado(){

    return this.storage.validarLoginUser("usuario-logado");

  }



}

