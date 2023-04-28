// function User(nome, email){
//     this.nome = nome;
//     this.email = email;

//     this.exibirInfos = function(){
//         return `${this.nome}, ${this.email}`
//     }
// };

// const NovoUser = new User('juliana', '@j.com');
// console.log(NovoUser.exibirInfos());

// function Adimin(role){
//     User.call(this, 'Juliana', '@j.com');
//     this.role = role || 'estudante';
// }

// Adimin.prototype = Object.create(User.prototype);
// const NovoUser = new Adimin('admin');
// console.log(NovoUser.exibirInfos());
// console.log(NovoUser.role);

const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },

    exibirInfos: function(){
        return this.nome;
    }
}

const novouser = Object.create(user);
novouser.init('Guilherme', 'g@novouser.com');

console.log(novouser.exibirInfos());