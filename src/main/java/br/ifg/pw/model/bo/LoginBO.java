package br.ifg.pw.model.bo;

import br.ifg.pw.model.dao.UserDAO;
import br.ifg.pw.model.dto.utils.LoginDTO;
import br.ifg.pw.model.dto.utils.ResponseDTO;
import br.ifg.pw.model.entity.User;
import br.ifg.pw.model.service.jwt.GerarToken;
import io.quarkus.elytron.security.common.BcryptUtil;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import jakarta.ws.rs.core.NewCookie;
import jakarta.ws.rs.core.Response;

import java.io.InputStream;
import java.util.Set;

import static br.ifg.pw.model.service.jwt.GerarToken.gerarToken;


@ApplicationScoped
public class LoginBO {

    @Inject
    UserDAO dao;

    @Inject
    private Validator validator;

    public Response validarUsuario(LoginDTO dto) {

        try {

            Set<ConstraintViolation<LoginDTO>> violations = validator.validate(dto);
            if(!violations.isEmpty()){
                StringBuilder sb = new StringBuilder();
                for (ConstraintViolation<LoginDTO> violation : violations) {
                    sb.append(violation.getMessage()).append("\n");
                }
                return Response.status(Response.Status.BAD_REQUEST)
                        .entity(sb.toString())
                        .build();
            }
                User user = dao.findByEmail(dto.getEmail());
                if(user != null){

                    boolean valid =  BcryptUtil.matches(dto.getSenha(), user.getSenha());

                  if(valid){

                      String token = gerarToken(user);

                      ResponseDTO responseDTO = ResponseDTO.builder()
                              .id(BcryptUtil.bcryptHash(String.valueOf(user.getId())))
                              .email(user.getEmail())
                              .perfil(user.getPerfil())
                              .build();

                      return Response.status(Response.Status.OK)
                              .entity(responseDTO).cookie(new NewCookie("usuario-logado", token)).build();
                  }
                  else {
                      return Response.status(Response.Status.UNAUTHORIZED)
                              .entity("Senha incorreta!")
                              .build();
                  }
                }

                return Response.status(400).entity("Usuário não cadastrado!").build();

        } catch (Exception e) {
            return Response.status(400).entity(e.getMessage()).build();
        }
    }
}
