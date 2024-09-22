package br.ifg.pw.model.dto.consultas;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.time.LocalTime;


@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ListarConsultasDTO {


    Long id;
    String paciente;
    String especialidade;
    String local;
    LocalDate date;
    LocalTime time;
    String status;

    public ListarConsultasDTO(Long id, String paciente, String especialidade, String local, LocalDate date, LocalTime time, String status) {
        this.id = id;
        this.paciente = paciente;
        this.especialidade = especialidade;
        this.local = local;
        this.date = date;
        this.time = time;
        this.status = status;
    }

    public ListarConsultasDTO(){

    }

}
