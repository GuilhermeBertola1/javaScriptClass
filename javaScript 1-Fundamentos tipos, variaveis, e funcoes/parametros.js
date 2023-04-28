//parâmetros de função;

function soma(numero1, numero2) {
    return numero1 + numero2;
}

// console.log(soma(2, 2));
// console.log(soma(23345, 2345));
// console.log(soma(1234562, -4562));

//parâmetros x argumentos;

//ordem de parâmetros;

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade('guilherme', 17));

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)));