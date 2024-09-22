import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { AppMessageService } from "../../../../shared/message-service/message.service";
import {TriagemListDTO} from "../../../../model/dto/triagem/Triagem-list.dto";

@Injectable({
  providedIn: 'root'
})
export class ListarService {
  private readonly API_URL = 'http://localhost:8080/triagem';

  constructor(private http: HttpClient, private message: AppMessageService) {}

  getAgendaData(): Observable<TriagemListDTO[]> {
    return this.http.get<TriagemListDTO[]>(this.API_URL).pipe(
      catchError(error => {
        this.message.showError("Erro ao carregar dados da triagem.");
        console.error('Erro ao buscar triagem:', error);
        return of([]);
      })
    );
  }
}
