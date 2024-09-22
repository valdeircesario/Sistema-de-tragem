import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {ConsutasDTO} from "../../../model/dto/consulta/consutas-dto";

@Injectable({
    providedIn: 'root'
})
export class ConsultaService {

    private apiUrl = 'http://localhost:8080/consulta';

    constructor(private http: HttpClient) { }

    salvarConsulta(record : ConsutasDTO) {
        this.http.post<any>(this.apiUrl, record, {
            observe: 'response',
            responseType: 'text' as 'json'
        })
            .subscribe(
                (response: HttpResponse<any>) => {
                    console.log("Deu Certo");
                },
                (error) => {
                    console.log("Deu ruim");
                });
    }
}
