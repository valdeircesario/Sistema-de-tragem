export class UsuarioListDTO {

  constructor(
    public id? : string,
    public nomeCompleto? : string,
    public telefone? : string,
    public perfil? : string,
    public email? : string,
    public senha? : string
  ) {

    /*
    * CRIAR FUTURAMENTE OUTRO DTO PARA ENDEREÇO SEPARADO E INICIALIZAR NESSE DTO AQUI
    *
    * */
  }


}
