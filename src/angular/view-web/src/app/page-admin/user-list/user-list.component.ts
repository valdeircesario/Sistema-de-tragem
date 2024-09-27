import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {ListService} from "./list.service";
import {UsuarioListDTO} from "../../../model/dto/usuario/usuario-list.dto";
import {CadastrarService} from "../../pages-utils/app-cadastrar/service/cadastro.service";
import {AppMessageService} from "../../../shared/message-service/message.service";

interface Perfil {
  name: string;
  code: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class UserListComponent implements OnInit {


  /*  VARIAVEIS */

  usuarios! : UsuarioListDTO[];
  usuario!: UsuarioListDTO ;

  cities!: Perfil[] ; //todo alterar depois dados devem vir do backend eu poderia ter colado aquo os dados mocados ao invez no NgOnit, e usar o serviço o ts aqui é só para redirecionar as chamadas

  productDialog: boolean = false;
  submitted = false;

  constructor(
    private productService: ListService,
    private messageService: AppMessageService,
    private confirmationService: ConfirmationService,
    private service :  ListService,
    private cadastrarService : CadastrarService

  ) {

  }

  //todo colocar os campos corretos depois

  ngOnInit(): void {
    this.cities = [
      { name: 'Convencional', code: 'CONV' },
      { name: 'Administrador', code: 'ADM' },
    ];

    this.filterUsuario();
  }

  filterUsuario(){
    this.service.listUser().subscribe({
      next: (data) => {
        this.usuarios = data;
        console.log(this.usuarios)
      },
      error: (err) => {
        console.error('Erro ao carregar usuários', err);
      },
    });
  }

  openNew() {
    this.usuario = {};
    this.submitted = false;
    this.productDialog = true;
  }


  editProduct(usuario: UsuarioListDTO) {
    this.usuario = usuario;
    this.productDialog = true;

  }

  deleteProduct(usuario: UsuarioListDTO) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar usuário, ' + usuario.email + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.remover(usuario);
      }
    });
    console.log(usuario)
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;

  }

  saveProduct(usuario : UsuarioListDTO) {
    this.cadastrarService.saveAdmin(usuario)
    this.productDialog = false;
    this.submitted = false;
    window.location.reload();
  }

  isValidForm(): boolean {

    if(this.usuario.id){
      if(this.usuario.email && this.usuario.nomeCompleto){
        return true;
      }

      return false;
    }else if(this.usuario.email && this.usuario.nomeCompleto && this.usuario.senha){
      return true;
    }
    return false;

  }

}
