import { catchError } from 'rxjs/operators';
import { AppMessageService } from "../../../../shared/message-service/message.service";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {ListarAgendamentoUsuario} from "../../../../model/dto/agendamento/agendamento-consulta-usuario-list.dto";


@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private readonly API_URL = 'http://localhost:8080/consulta/paciente';

  constructor(private http: HttpClient, private message: AppMessageService) {}

  getAgenda(): Observable<ListarAgendamentoUsuario[]> {
    return this.http.get<ListarAgendamentoUsuario[]>(this.API_URL).pipe(
      catchError(error => {
        this.message.showError("Erro ao carregar dados da agenda.");
        console.error('Erro ao buscar agenda:', error);
        return of([]);
      })
    );
  }

}
