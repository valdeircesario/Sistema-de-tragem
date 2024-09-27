package br.ifg.pw.model.dto.utils;

import br.ifg.pw.model.entity.User;
import io.quarkus.elytron.security.common.BcryptUtil;
import lombok.*;
import lombok.experimental.FieldDefaults;


@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ResponseDTO {

    private String id;
    private String email;
    private String perfil;
    private String token;
    private String message;


    @Builder
    public ResponseDTO(String id, String email, String token, String message, String perfil) {
        this.id = id;
        this.email = email;
        this.token = token;
        this.message = message;
        this.perfil = perfil;
    }

}
