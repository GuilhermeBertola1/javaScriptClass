class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depoitar(valor){
        this.saldo += valor
    }

    sacar(valor){
        this.saldo -= valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }

}

const guilherme = new Cliente("Guilherme", "guilherme.bertola.123@gmail.com", "23456789", 100);

console.log(guilherme);

guilherme.exibirSaldo();