import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {UsuarioListDTO} from "../../../model/dto/usuario/usuario-list.dto";
import {HttpClient} from "@angular/common/http";
import {AppMessageService} from "../../../shared/message-service/message.service";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private readonly API_URL = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient, private message : AppMessageService) {}



  listUser(): Observable<UsuarioListDTO[]> {
    return this.http.get<UsuarioListDTO[]>(this.API_URL);
  }

  remover(usuario : any){
    this.http.delete(`http://localhost:8080/usuario/${usuario?.id}`)
      .subscribe(
    (response) => {

      console.log(response)
      this.message.showSuccess("Usuário Deletado com Sucesso!")
      window.location.reload()

      },
  (error) => {
        console.log(error)
        this.message.showError("Erro! contate o administrador.")
        })

    window.location.reload()
  }


}
