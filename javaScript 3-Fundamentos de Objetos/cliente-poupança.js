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
};

function clientePoupança(nome, cpf, email, saldo, saldoPoup){
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup;
};

const Gabi = new clientePoupança("Gabriela", "238029582", "gabi@gmail.com", 1000, 10000);

console.log(Gabi);

clientePoupança.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}

Gabi.depositarPoup(10000000000000000000000);

console.log(Gabi.saldoPoup);