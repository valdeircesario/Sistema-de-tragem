package br.ifg.pw.model.dto.utils;

import jakarta.validation.constraints.NotBlank;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;


@Builder
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class LoginDTO {

     @NotBlank(message = "Email obrigatório.")
     String email;

     @NotBlank(message = "Senha obrigatório.")
     String senha;

    public LoginDTO(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }

    public LoginDTO(){
    }
}
