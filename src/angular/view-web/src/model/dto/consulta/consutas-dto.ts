export class ConsutasDTO {

  constructor(
    public id? :string,
    public id_paciente? : string,
    public especialidade? : string,
    public local? : string,
    public date? : string,
    public time? : string,
    public status? : string

  ) {

    /*
    * CRIAR FUTURAMENTE OUTRO DTO PARA ENDEREÇO SEPARADO E INICIALIZAR NESSE DTO AQUI
    *
    * */
  }


}
