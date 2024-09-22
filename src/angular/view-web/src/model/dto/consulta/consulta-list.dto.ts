export class ListarConsutasDTO {

    constructor(
        public id?: string,
        public paciente?: string,
        public especialidade?: string,
        public local?: string,
        public date?: string,
        public time?: string,
        public status?: string
    ){

    }

}
