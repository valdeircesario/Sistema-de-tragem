//package br.ifg.pw.model.dto.triagem;
//import br.ifg.pw.model.entity.Triagem;
//import lombok.*;
//import lombok.experimental.FieldDefaults;
//import java.time.LocalDate;
//import java.time.LocalTime;
//
//@Builder
//@Data
//@FieldDefaults(level = AccessLevel.PRIVATE)
//
//
//public class TriagemUsuarioDTO {
//
//    long id;
//    String especialidade;
//    String hipertensao;
//    String diabetico;
//    String febre;
//    String dor;
//    String intensidade;
//    String peso;
//    String mediaPonderada;
//
//    // Construtor
//    public TriagemUsuarioDTO(long id, String especialidade, String hipertensao,
//                             String diabetico, String febre, String dor,
//                             String intensidade, String peso, String mediaPonderada) {
//
//        this.id = id;
//        this.especialidade = especialidade;
//        this.hipertensao = hipertensao;
//        this.diabetico = diabetico;
//        this.febre = febre;
//        this.dor = dor;
//        this.intensidade = intensidade;
//        this.peso = peso;
//        this.mediaPonderada = mediaPonderada;
//    }
//
//
//
//
//    public Triagem toEntity(TriagemUsuarioDTO dto) {
//
//        return Triagem.builder()
//
//
//                .especialidade(dto.getEspecialidade())
//                .hipertensao(dto.getHipertensao())
//                .diabetico(dto.getDiabetico())
//                .febre(dto.getFebre())
//                .dor(dto.getDor())
//                .intensidade(dto.getIntensidade())
//                .peso(dto.getPeso())
//                .mediaPonderada(dto.getMediaPonderada())
//                .build();
//
//
//    }
//
//    public TriagemUsuarioDTO(){
//
//    }
//
//
//
//}