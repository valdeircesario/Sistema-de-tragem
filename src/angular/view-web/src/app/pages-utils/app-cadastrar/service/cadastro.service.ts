import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {CadastroDTO} from "../../../../model/dto/cadastrar/cadastrar-dto";
import {AppMessageService} from "../../../../shared/message-service/message.service";
import {Router} from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class CadastrarService {

    private apiUrl = 'http://localhost:8080/usuario/public'; // URL da API Quarkus

    constructor(
      private http: HttpClient,
      private messageService : AppMessageService,
      private router : Router) { }

    save(record : CadastroDTO) {
        this.http.post<any>(this.apiUrl, record, {
            observe: 'response',
            responseType: 'text' as 'json'
        })
            .subscribe(
                (response: HttpResponse<any>) => {

                  this.messageService.showSuccess("Usuário cadastrado com sucesso!")
                  this.router.navigate(['/login']);
                },
                (error) => {

                  this.messageService.showError("Erro, contate o administrador!")
                  this.router.navigate(['/login']);
                });
    }

  saveAdmin(record : CadastroDTO) {
    this.http.post<any>(`http://localhost:8080/usuario`, record, {
      observe: 'response',
      responseType: 'text' as 'json'
    })
      .subscribe(
        (response: HttpResponse<any>) => {

          this.messageService.showSuccess("Usuário cadastrado com sucesso!")
          this.router.navigate(['/login']);
        },
        (error) => {

          this.messageService.showError("Erro, contate o administrador!")
          this.router.navigate(['/login']);
        });
  }
}
