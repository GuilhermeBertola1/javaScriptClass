// medias 10, 6.5, 8.0, 7.5;

// let nota = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;

             //0 --> posição zero/ chamado mais de indice zero/0; no indece 0 temos um elemento de valor 10;
const notas = [10, 6.5, 8, 7.5];

//as posições que colocamos dados/valores(esse valores são comumente chamados de !elementos! ou !elemento!); dentro de um array são chamadas de !indices!;

//let media = (nota + nota2 + nota3 + nota4) / 4;

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);