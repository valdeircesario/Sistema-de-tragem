package br.ifg.pw.model.bo;

import br.ifg.pw.model.dao.UserDAO;
import br.ifg.pw.model.dto.user.CadastroUsuarioDTO;
import br.ifg.pw.model.dto.user.ListarUsuarioDTO;
import br.ifg.pw.model.entity.User;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.core.Response;

import java.util.List;

import static java.util.Objects.nonNull;


@ApplicationScoped
public class UserBO {

    @Inject
    UserDAO dao;

    @Transactional
    public Response save(CadastroUsuarioDTO dto) {

        //todo ajustar os retornos com as mensagems corretas

        try {

            //todo ajustar isso aqui depois
            if (nonNull(dto.getId())) {
                User entity = dao.findById(dto.getId());
                entity.setNomeCompleto(dto.getNomeCompleto());
                entity.setEmail(dto.getEmail());
                entity.setTelefone(dto.getTelefone());
                entity.setPerfil(dto.getPerfil());
                this.dao.persist(entity);
                return Response.status(Response.Status.CREATED).build();
            }

            User exist = dao.findByEmail(dto.getEmail());

            if (exist != null) {
                return Response.status(Response.Status.CONFLICT).build();
            }

            User userNew = User.builder()
                    .id(dto.getId())
                    .nomeCompleto(dto.getNomeCompleto())
                    .email(dto.getEmail())
                    .senha(dto.getSenha())
                    .telefone(dto.getTelefone())
                    .build();
            this.dao.persist(userNew);
            return Response.status(Response.Status.CREATED).build();

        } catch (Exception e) {

            return Response.serverError().build();
        }

    }

    @Transactional
    public Response createUserConvencional(CadastroUsuarioDTO dto) {

        try {

            User exist = dao.findByEmail(dto.getEmail());

            if (exist != null) {
                return Response.status(Response.Status.CONFLICT).entity("Email já cadastrado!").build();
            }
            User userNew = User.builder()
                    .id(dto.getId())
                    .nomeCompleto(dto.getNomeCompleto())
                    .email(dto.getEmail())
                    .senha(dto.getSenha())
                    .perfil("Convencional")
                    .telefone(dto.getTelefone())
                    .build();
            this.dao.persist(userNew);
            return Response.status(Response.Status.CREATED).build();

        } catch (Exception e) {

            return Response.serverError().build();
        }

    }

    public Response list() {

        List<ListarUsuarioDTO> list = dao.findAllUsers();

        return Response.ok(list).build();
    }

    public Response remover(Long id) {

        try {
            dao.deleteById(id);
           return Response.status(Response.Status.OK).build();

        } catch (Exception e) {
            return Response.serverError().build();
        }
    }


}
