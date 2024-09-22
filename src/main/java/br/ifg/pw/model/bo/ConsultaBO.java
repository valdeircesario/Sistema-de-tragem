package br.ifg.pw.model.bo;

import br.ifg.pw.model.dao.ConsultaDAO;
import br.ifg.pw.model.dao.UserDAO;
import br.ifg.pw.model.dto.consultas.ConsultaDTO;
import br.ifg.pw.model.dto.consultas.ListarConsultasDTO;
import br.ifg.pw.model.entity.Consulta;
import br.ifg.pw.model.entity.User;
import io.quarkus.security.identity.SecurityIdentity;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.core.Response;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import static java.util.Objects.nonNull;

@ApplicationScoped
public class ConsultaBO {

    @Inject
    ConsultaDAO dao;

    @Inject
    SecurityIdentity securityIdentity;

    @Transactional
    public Response salvarConsulta(ConsultaDTO dto) {
        try {

            if (nonNull(dto.getId())) {
                Consulta entity = dao.findById(dto.getId());

                if (entity != null) {

                    entity.setPaciente(String.valueOf(dto.getPaciente()));
                    entity.setEspecialidade(dto.getEspecialidade());
                    entity.setLocal(dto.getLocal());
                    entity.setDate(LocalDate.parse(dto.getDate())); // Converte a data
                    entity.setTime(LocalTime.parse(dto.getTime()));
                    entity.setStatus(dto.getStatus());

                    System.out.println("Tentando persistir nova consuta: "+dto);

                    this.dao.persist(entity);
                    return Response.status(Response.Status.OK).entity("Consulta atualizada com sucesso.").build();
                }
            }


            Consulta consultaNew = Consulta.builder()

                    .paciente(String.valueOf(dto.getPaciente()))
                    .especialidade(dto.getEspecialidade())
                    .local(dto.getLocal())
                    .date(LocalDate.parse(dto.getDate()))
                    .time(LocalTime.parse(dto.getTime()))
                    .status(dto.getStatus())
                    .build();
            System.out.println(" nova consulta: "+dto);

            this.dao.persist(consultaNew);
            return Response.status(Response.Status.CREATED).entity("Consulta criada com sucesso.").build();

        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Erro ao salvar consulta: " + e.getMessage()).build();
        }
    }

    public Response listarConsultas() {
        List<ListarConsultasDTO> list = dao.findAllConsulta();
        return Response.ok(list).build();
    }

    public Response listarPaciente(){
        ;
        List<ListarConsultasDTO> list = dao.findConsultasByPaciente(Long.valueOf(securityIdentity.getPrincipal().getName()));
        return Response.ok(list).build();
    }
}
