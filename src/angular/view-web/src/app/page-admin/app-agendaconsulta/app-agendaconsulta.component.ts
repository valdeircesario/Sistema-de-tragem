import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ConsultaService } from './consulta.service';
import {AppMessageService} from "../../../shared/message-service/message.service";

@Component({
  selector: 'app-app-agendaconsulta',
  templateUrl: './app-agendaconsulta.component.html',
  styleUrls: ['./app-agendaconsulta.component.scss']
})
export class AppAgendaconsultaComponent {
  form!: FormGroup;
  mensagemSucesso: string = '';

  constructor(
      private servico: ConsultaService,
      private fb: FormBuilder,
      private messageService : AppMessageService,
  ) {}


  async onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    if (ngForm.valid) {
      try {
        await this.servico.salvarConsulta(ngForm.value);
        ngForm.resetForm(); // Zera o formulário
        this.messageService.showSuccess("Triagem cadastrado com sucesso!")
      } catch (error) {
        this.messageService.showError("Error ao marcar agendamento!")

      }
    } else {
      this.messageService.showError("Erro")
    }
  }
}
