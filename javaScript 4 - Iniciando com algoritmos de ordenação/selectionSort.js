const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for(let atual = 0; atual < livros.length - 1; atual++){
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log(livroAtual);
    let livroMenorPreço = livros[menor];
    console.log(livroMenorPreço);

    livros[atual] = livroMenorPreço;
    livros[menor] = livroAtual;
}

console.log(livros);