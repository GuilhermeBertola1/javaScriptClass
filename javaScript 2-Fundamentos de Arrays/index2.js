const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma) //170

//Vamos reescrever o reduce() de uma forma um pouco mais extensa para separar melhor as partes do código:

const soma = numeros.reduce(function (acum, atual) {return atual + acum }, 0);

//Uma terceira forma de reescrever seria escrevendo a função callback fora do reduce():

function operacaoNumerica(acum, atual) {
    return atual + acum
}
   
const soma = numeros.reduce(operacaoNumerica, 0)