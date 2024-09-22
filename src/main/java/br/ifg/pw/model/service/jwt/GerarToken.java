package br.ifg.pw.model.service.jwt;

import br.ifg.pw.model.entity.User;
import io.smallrye.jwt.build.Jwt;
import jakarta.enterprise.context.ApplicationScoped;
import org.eclipse.microprofile.jwt.Claims;

import java.time.Duration;
import java.time.Instant;

import static org.eclipse.microprofile.jwt.Claims.email;

@ApplicationScoped
public class GerarToken {

    public static String gerarToken(User user)  {

        String token =
                Jwt.issuer("http://localhost:8080")
                        .expiresAt(Instant.now().plus(Duration.ofHours(1)))
                        .upn(String.valueOf(user.getId()))
                        .groups(user.getPerfil())
                        .claim(email, email)
                        .sign();
        return token;
    }
}
