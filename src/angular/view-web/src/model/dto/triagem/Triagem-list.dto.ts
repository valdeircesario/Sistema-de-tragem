export class TriagemListDTO{
    constructor(
        public id? :number,
        public especialidade?: string,
        public hipertensao?: string,
        public diabetico?: string,
        public febre?: string,
        public dor?: string,
        public intensidade?: string,
        public peso?: string,
        public mediaPonderada?: string,
        public paciente? : string
    ) {
    }
}
