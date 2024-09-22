package br.ifg.pw.model.dao;
import br.ifg.pw.model.dto.triagemTeste.ListagemTriagemDTO;

import br.ifg.pw.model.entity.Triagem;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.List;


@ApplicationScoped
public class TriagemDAO implements PanacheRepositoryBase<Triagem, Long> {


    public List<ListagemTriagemDTO> findAllTriagemTeste() {
        String hql = "select new br.ifg.pw.model.dto.triagemTeste.ListagemTriagemDTO(t.id,t.especialidade, t.hipertensao, " +
                "t.diabetico, t.febre, t.dor, t.intensidade, t.peso, t.mediaPonderada, t.paciente) " +
                "from Triagem t";

        return getEntityManager().createQuery(hql, ListagemTriagemDTO.class).getResultList();
    }


}
