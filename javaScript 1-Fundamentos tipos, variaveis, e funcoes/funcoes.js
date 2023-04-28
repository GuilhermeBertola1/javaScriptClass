// let x = "";
// console.log(x);
// x = "oi";

//1° momento - é quando declaramos a função (declaração de função);
function imprimeTexto(texto) {
    console.log(texto);
}

//2° momento - é quando executamos a função(1 ou + vezes);
imprimeTexto('oi');
imprimeTexto('outro texto');
imprimeTexto(soma());

//tres formas de escrever funções;

function soma() {
    // outros codigos...; mas a linha do retorno é aultima coisa da função;
    return 2 + 2;
}

//console.log(soma());