import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppMessageService} from "../../../shared/message-service/message.service";
import {AgendamentoService} from "./service/consultar-agendamento.service";
import {ListarAgendamentoUsuario} from "../../../model/dto/agendamento/agendamento-consulta-usuario-list.dto";


@Component({
  selector: 'app-app-consultar-agendamento',
  templateUrl: './app-consultar-agendamento.component.html',
  styleUrls: ['./app-consultar-agendamento.component.scss']
})
export class AppConsultarAgendamentoComponent  implements OnInit {
  @ViewChild('myModal') modal!: ElementRef;

  Agenda: ListarAgendamentoUsuario[] = [];

  constructor(
    private consutarService: AgendamentoService,
    private message: AppMessageService
  ) {}

  ngOnInit(): void {
    this.verconsultas();
  }

  openModal(event: Event): void {
    event.preventDefault();
    this.verconsultas();
    this.modal.nativeElement.style.display = 'block';
  }

  closeModal(): void {
    this.modal.nativeElement.style.display = 'none';
  }

  onWindowClick(event: Event): void {
    if (event.target === this.modal.nativeElement) {
      this.closeModal();
    }
  }

  verconsultas(): void {
    this.consutarService.getAgenda().subscribe({
      next: (data: ListarAgendamentoUsuario[]) => {
        this.Agenda = data;
        if(this.Agenda.length === 0 ){
          this.message.showInfo("Sem agendamentos, contate o administrador!");
        }
        console.log('Dados da agenda recebidos:', this.Agenda);
      },
      error: (err) => {
        console.error('Erro ao carregar agenda', err);
        this.message.showError("Erro ao carregar dados da agenda.");
      }
    });
  }

}
