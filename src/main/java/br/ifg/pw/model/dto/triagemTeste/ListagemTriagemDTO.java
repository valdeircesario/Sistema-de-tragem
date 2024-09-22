package br.ifg.pw.model.dto.triagemTeste;


import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ListagemTriagemDTO {

    Long id;
    String especialidade;
    String hipertensao;
    String diabetico;
    String febre;
    String dor;
    String intensidade;
    String peso;
    String mediaPonderada;
    String paciente;

    public ListagemTriagemDTO(Long id, String especialidade, String hipertensao, String diabetico, String febre, String dor, String intensidade, String peso, String mediaPonderada, String paciente) {
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
}
