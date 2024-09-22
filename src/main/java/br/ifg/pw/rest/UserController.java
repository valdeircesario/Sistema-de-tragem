package br.ifg.pw.rest;


import br.ifg.pw.model.bo.UserBO;
import br.ifg.pw.model.dto.user.CadastroUsuarioDTO;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;


@Path("/usuario")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserController {

    @Inject
    UserBO bo;

    @POST
    @Transactional
    public Response create(CadastroUsuarioDTO dto) {
        return bo.save(dto);
    }

    @POST
    @Transactional
    @Path("/public")
    public Response createUser(CadastroUsuarioDTO dto) {
        return bo.createUserConvencional(dto);
    }






    @GET
    public Response list() {
        return bo.list();
    }

    @DELETE
    @Transactional
    @Path("{id}")
    public Response delete(@PathParam("id") Long id){
        return bo.remover(id);
    }

}
