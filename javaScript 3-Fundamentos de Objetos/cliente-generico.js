function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor;
    }
    this.sacar = function(valor){
        this.saldo -= valor;
    }
}

const andre = new cliente('Guilherme', '193013', 'guilherme.bertola.123@gmail.com', 1000);

console.log(andre);