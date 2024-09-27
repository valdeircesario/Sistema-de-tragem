import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppMessageService} from "../../../shared/message-service/message.service";
import {ListarService} from "./service/listar.service";
import {TriagemListDTO} from "../../../model/dto/triagem/Triagem-list.dto";

@Component({
  selector: 'app-listar-triagem',
  templateUrl: './listar-triagem.component.html',
  styleUrls: ['./listar-triagem.component.scss']
})
export class ListarTriagemComponent implements OnInit {
  @ViewChild('myModal') modal!: ElementRef;

  AgendaData: TriagemListDTO[] = [];

  constructor(
    private listaService:ListarService,
    private message: AppMessageService
  ) {}

  ngOnInit(): void {
    this.consultaragenda();
  }

  openModal(event: Event): void {
    event.preventDefault();
    this.consultaragenda();
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

  consultaragenda(): void {
    this.listaService.getAgendaData().subscribe({
      next: (data: TriagemListDTO[]) => {
        this.AgendaData = data;
        console.log('Dados da agenda recebidos:', this.AgendaData);
      },
      error: (err) => {
        console.error('Erro ao carregar agenda', err);
        this.message.showError("Erro ao carregar dados da agenda.");
      }
    });
  }

}
