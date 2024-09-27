package br.ifg.pw.model.dto.consultas;
import br.ifg.pw.model.entity.Consulta;
import lombok.*;
import lombok.experimental.FieldDefaults;
import java.time.LocalDate;
import java.time.LocalTime;

@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)


public class ConsultaDTO {

    long id;
    String paciente;
    String especialidade;
    String local;
    String date;
    String time;
    String status;

    // Construtor com todos os campos
    public ConsultaDTO(long id,String paciente, String especialidade,String status, String local,String date,
                       String time) {

        this.id = id;
        this.paciente = paciente;
        this.especialidade = especialidade;
        this.local = local;
        this.date = date;
        this.time = time;
        this.status = status;
    }

    // Construtor vazio para casos de uso como serialização
    public ConsultaDTO() {
    }


    public Consulta toEntity(ConsultaDTO dto) {


        return Consulta.builder()
                .paciente(String.valueOf(dto.getPaciente()))
                .especialidade(dto.getEspecialidade())
                .local(dto.getLocal())
                .date(LocalDate.parse(dto.getDate()))
                .time(LocalTime.parse(dto.getTime()))
                .status(dto.getStatus())
                .build();
    }
}
