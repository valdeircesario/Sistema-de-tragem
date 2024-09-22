import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppMessageService} from "../../../shared/message-service/message.service";
import {ListarConsutasDTO} from "../../../model/dto/consulta/consulta-list.dto";
import {ConsutarService} from "./service/consutar-service";

@Component({
  selector: 'app-listar-consultas',
  templateUrl: './listar-consultas.component.html',
  styleUrls: ['./listar-consultas.component.scss']
})
export class ListarConsultasComponent implements OnInit {
  @ViewChild('myModal') modal!: ElementRef;

  Agenda: ListarConsutasDTO[] = [];

  constructor(
      private consutarService:ConsutarService,
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
      next: (data: ListarConsutasDTO[]) => {
        this.Agenda = data;
        console.log('Dados da agenda recebidos:', this.Agenda);
      },
      error: (err) => {
        console.error('Erro ao carregar agenda', err);
        this.message.showError("Erro ao carregar dados da agenda.");
      }
    });
  }

}
