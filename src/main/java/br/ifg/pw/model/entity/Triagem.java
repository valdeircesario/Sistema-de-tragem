package br.ifg.pw.model.entity;

import br.ifg.pw.model.dto.triagemTeste.RegistraTriagemDTO;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;


@Entity
@Data
@EqualsAndHashCode
@Table(name = "tbtriagem")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Triagem extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(columnDefinition = "varchar(255)")
    String especialidade;

    @Column(columnDefinition = "varchar(255)")
    String hipertensao;

    @Column(columnDefinition = "varchar(50)")
    String diabetico;

    @Column(columnDefinition = "varchar(255)")
    String febre;

    @Column(columnDefinition = "varchar(20)")
    String dor;

    @Column(columnDefinition = "varchar(255)")
    String intensidade;

    @Column(columnDefinition = "varchar(20)")
    String peso;

    @Column(name = "media_ponderada", columnDefinition = "varchar(255)")
    String mediaPonderada;

    @Column(name = "id_paciente", columnDefinition = "varchar(255)")
    String paciente;



    @Builder
    public Triagem(Long id, String especialidade, String hipertensao, String diabetico,
                   String febre, String dor, String intensidade, String peso, String mediaPonderada, String paciente) {
        this.id = id;
        this.especialidade = especialidade;
        this.hipertensao = hipertensao;
        this.diabetico = diabetico;
        this.febre = febre;
        this.dor = dor;
        this.intensidade = intensidade;
        this.peso = peso;
        this.mediaPonderada = mediaPonderada;
        this.paciente = paciente;
    }

    public Triagem() {

    }
}
