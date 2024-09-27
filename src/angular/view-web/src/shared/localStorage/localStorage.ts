import {Injectable} from "@angular/core";
import {LoginDTO} from "../../model/dto/login/login-dto";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: any = localStorage;
  //private storage: any = sessionStorage;


  constructor(

  ) { }



  armazenarLoginUser(dados : LoginDTO){

    this.storage.setItem('usuario-logado', JSON.stringify(dados));


  }



  validarLoginUser(key : string) {

    let isUsuarioLogado = this.storage.getItem(key)

    return isUsuarioLogado!=null;
  }

  removerLoginUser(){

    this.storage.removeItem('usuario-logado')
    this.storage.clear();
  }

  returnLoginUser() : LoginDTO | null{
    const usuarioLogadoStr = localStorage.getItem('usuario-logado');
    if (usuarioLogadoStr) {
      return JSON.parse(usuarioLogadoStr) as LoginDTO;
    } else {
      return null;
    }
  }




}
