export class TriagemDTO {

  constructor(
      public id? :number,
      public especialidade?: string,
      public hipertensao?: string,
      public diabetico?: string,
      public febre?: string,
      public dor?: string,
      public intensidade?: string,
      public peso?: string,
      public mediaPonderada?: string
  ) {

    /*
    * CRIAR FUTURAMENTE OUTRO DTO PARA ENDEREÇO SEPARADO E INICIALIZAR NESSE DTO AQUI
    *
    * */
  }


}
