import {Component, OnInit} from '@angular/core';
import { CadastrarService } from './service/cadastro.service';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';


@Component({
  selector: 'app-app-cadastrar',
  templateUrl: './app-cadastrar.component.html',
  styleUrls: ['./app-cadastrar.component.scss']
})

export class AppCadastrarComponent implements OnInit{



  constructor(
    private servico: CadastrarService,
    private fb: FormBuilder) {

  }

  /* VARIAVEIS DE AMBIENTE */
  form!: FormGroup;

  // fullName: ['', Validators.required],
  // phone: ['', Validators.required],
  // address: ['', Validators.required],
  // birthDate: ['', Validators.required],
  // email: ['', [Validators.required, Validators.email]],
  // password: ['', [Validators.required, Validators.minLength(8)]],
  // confirmPassword: ['', Validators.required]


    // Método que chama o serviço salvar e verifica se o formulário é válido

  //METODO CHAMA O SERVIÇO SALVAR
  onSubmit(formCadastro : NgForm) {
    console.log(formCadastro)
    if(formCadastro.valid){
      this.servico.save(formCadastro.value)
    }else {
      console.log("Não deu ")
    }

  }

  ngOnInit(): void {
    this.form = this.fb.group({
    })
  }



}
