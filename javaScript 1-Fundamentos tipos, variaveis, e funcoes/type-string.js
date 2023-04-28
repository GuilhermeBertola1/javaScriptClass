const texto1 = "Olá, mundo";
const texto2 = 'Olá, mundo';
const senha = 'senhaSuperSegura123456!';
const stringDeNumeros = '34567';

const citacao = "Meu nome é ";
const meuNome = "Guilherme";

//concatenação (+);

console.log(citacao + meuNome);

// template string ou template literal;

// utilizando emojis no sistema;

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//transformando todos os caracteres em letras minúsculas;

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

//quantos caracteres uma string contém;

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres
