package br.ifg.pw.rest;


import br.ifg.pw.model.bo.TriagemBO;
import br.ifg.pw.model.dto.triagemTeste.RegistraTriagemDTO;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;


@Path("/triagem")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TriagemController {


    @Inject
    TriagemBO bo;

    @POST
    @Transactional

    public Response salvar(RegistraTriagemDTO dto) {
        return bo.salvartriagem(dto);
    }



    @GET
    public Response listar() {
        return bo.listar();
    }



    @DELETE
    @Transactional
    @Path("{id}")
    public Response delete(@PathParam("id") Long id){
        return bo.remover(id);
    }


}
