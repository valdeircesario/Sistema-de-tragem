package br.ifg.pw.rest;

import br.ifg.pw.model.bo.ConsultaBO;
import br.ifg.pw.model.dto.consultas.ConsultaDTO;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/consulta")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ConsultaController {

    @Inject
    ConsultaBO bo;


    @POST
    @Transactional
    public Response salva(ConsultaDTO dto) {
        return bo.salvarConsulta(dto);
    }




    @GET
    public Response lister() {
        return bo.listarConsultas();
    }


    @GET
    @Path("paciente")
    public Response listarPaciente() {
        return bo.listarPaciente();
    }



}
