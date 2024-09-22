package br.ifg.pw.model.bo;

import br.ifg.pw.model.dao.TriagemDAO;
import br.ifg.pw.model.dto.triagemTeste.ListagemTriagemDTO;
import br.ifg.pw.model.dto.triagemTeste.RegistraTriagemDTO;
import br.ifg.pw.model.entity.Triagem;
import io.quarkus.security.identity.SecurityIdentity;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.core.Response;

import java.util.List;


@ApplicationScoped
public class TriagemBO {

    @Inject
    TriagemDAO dao;

    @Inject
    SecurityIdentity securityIdentity;


    @Transactional
    public Response salvartriagem(RegistraTriagemDTO dto) {
        try {

            //todo acrescentar usuário para listar triagem do usuário logado!

            System.out.println("Recebendo dados do dto: " + dto);
            Triagem triagem = Triagem.builder()
                    .id(dto.getId())
                    .paciente(securityIdentity.getPrincipal().getName())
                    .hipertensao(dto.getHipertensao())
                    .peso(dto.getPeso())
                    .diabetico(dto.getDiabetico())
                    .especialidade(dto.getEspecialidade())
                    .dor(dto.getDor())
                    .intensidade(dto.getIntensidade())
                    .febre(dto.getFebre())
                    .mediaPonderada(dto.getMediaPonderada())
                    .build();


            this.dao.persist(triagem);
            return Response.status(Response.Status.CREATED).entity("Triagem criada com sucesso.").build();

        } catch (Exception e) {

            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Erro00000 ao registrar a triagem: " + e.getMessage()).build();
        }
    }

    @Transactional
    public Response listar() {
            List<ListagemTriagemDTO> list = dao.findAllTriagemTeste();
        return Response.ok(list).build();
    }

    @Transactional
    public Response remover(Long id) {

        try {
            dao.deleteById(id);
            return Response.status(Response.Status.OK).build();

        } catch (Exception e) {
            return Response.serverError().build();
        }
    }


}
