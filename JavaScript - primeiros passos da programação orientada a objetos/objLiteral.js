const user = {
    nome: "Guilherme",
    email: "guilherme.bertola@gmail.com",
    nascimento: "21/03/2020",
    role: "estudante",
    ativo: true,

    exibirInfos: function(){
        console.log(this.nome, this.email, this.nascimento, this.role, this.ativo);
    }

};

const admin = {
    nome: "Mariana",
    email: "@m.com",
    role: "admin",

    criarCurso(){
        console.log("Curso criado!");
    }

};

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();