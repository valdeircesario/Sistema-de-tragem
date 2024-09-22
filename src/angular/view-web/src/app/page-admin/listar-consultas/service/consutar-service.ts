import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { AppMessageService } from "../../../../shared/message-service/message.service";
import {ListarConsutasDTO} from "../../../../model/dto/consulta/consulta-list.dto";


@Injectable({
    providedIn: 'root'
})
export class ConsutarService {

    private readonly API_URL = 'http://localhost:8080/consulta';

    constructor(private http: HttpClient, private message: AppMessageService) {}

    getAgenda(): Observable<ListarConsutasDTO[]> {
        return this.http.get<ListarConsutasDTO[]>(this.API_URL).pipe(
            catchError(error => {
                this.message.showError("Erro ao carregar dados da agenda.");
                console.error('Erro ao buscar agenda:', error);
                return of([]);
            })
        );
    }

}
