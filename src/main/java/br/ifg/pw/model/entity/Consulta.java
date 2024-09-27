package br.ifg.pw.model.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.*;
import lombok.experimental.FieldDefaults;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
@Table(name = "tbconsulta")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Consulta extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    //todo corrigir esse relacionamento
    @Column(name = "id_paciente", columnDefinition = "varchar(255)")
    String paciente;

    @Column(name = "especialidade", columnDefinition = "varchar(255)")
    String especialidade;

    @Column(name = "data", columnDefinition = "DATE")
    LocalDate date;

    @Column(name = "local", columnDefinition = "varchar(255)")
    String local;

    @Column(name = "horario", columnDefinition = "TIME")
    LocalTime time;

    @Column(name = "status", columnDefinition = "varchar(255)")
    String status;

//    @Column(name = "data_criacao", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", updatable = false)
//    LocalDate dataCriacao;


    @Builder
    public Consulta(Long id, String especialidade, String paciente, LocalDate date,
                    String local, LocalTime time, String status) {
        this.id = id;
        this.especialidade = especialidade;
        this.paciente = paciente;
        this.date = date;
        this.local = local;
        this.time = time;
        this.status = status;
//        this.dataCriacao = LocalDate.now();
    }

    // Construtor padrão
    public Consulta() {
//        this.dataCriacao = LocalDate.now();
    }


}
