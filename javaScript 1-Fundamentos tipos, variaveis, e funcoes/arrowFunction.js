function apresentar(nome){
    return `meu nome é ${nome}`;
}

// criando a função com o metodo arrow function;
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// arrow function com mais de uma linha de instrução;
//hosting arrow function se comporta da mesma forma como expressão;

const somaNumerosPequenos = (num1, num2) => {
    if(num1 || num2 > 10){
        return 'somente numeros de 1 a 9';
    }else{
        return num1 + num2;
    }
}

