package br.ifg.pw.model.dao;

import br.ifg.pw.model.dto.consultas.ListarConsultasDTO;
import br.ifg.pw.model.entity.Consulta;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.List;

@ApplicationScoped
public class ConsultaDAO implements PanacheRepositoryBase<Consulta, Long> {


    public List<ListarConsultasDTO> findAllConsulta() {

      //language=HQL
        String hql = "select new br.ifg.pw.model.dto.consultas.ListarConsultasDTO(c.id, c.paciente, c.especialidade, c.local, c.date, c.time,c.status) " +
                "from Consulta c";

        return getEntityManager().createQuery(hql,ListarConsultasDTO.class).getResultList();
    }

    public List<ListarConsultasDTO> findConsultasByPaciente(Long idPaciente) {

        //language=HQL
        String hql = "select new br.ifg.pw.model.dto.consultas.ListarConsultasDTO(c.id, c.paciente, c.especialidade, c.local, c.date, c.time, c.status) " +
                "from Consulta c " +
                "where c.paciente = :idPaciente";

        return getEntityManager()
                .createQuery(hql, ListarConsultasDTO.class)
                .setParameter("idPaciente", idPaciente)
                .getResultList();
    }
}