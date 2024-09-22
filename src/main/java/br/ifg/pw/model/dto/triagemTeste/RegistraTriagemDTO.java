package br.ifg.pw.model.dto.triagemTeste;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;


@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RegistraTriagemDTO {


    Long id;
    String especialidade;
    String hipertensao;
    String diabetico;
    String febre;
    String dor;
    String intensidade;
    String peso;
    String mediaPonderada;

    public RegistraTriagemDTO(Long id, String especialidade, String hipertensao,
                             String diabetico, String febre, String dor,
                             String intensidade, String peso, String mediaPonderada) {


        this.id = id;
        this.especialidade = especialidade;
        this.hipertensao = hipertensao;
        this.diabetico = diabetico;
        this.febre = febre;
        this.dor = dor;
        this.intensidade = intensidade;
        this.peso = peso;
        this.mediaPonderada = mediaPonderada;
    }


    public RegistraTriagemDTO(){

    }

}
