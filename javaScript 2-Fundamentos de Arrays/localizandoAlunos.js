const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const mediasDosAlunos = [10, 7, 9, 6];

// includes retorna valores --> booleanos;
// indexOf retorna o numero do indice referente ao elementos, ou seja, se ana está no indice 3 da array ele retonar 3, 
//correspondente ao valor do indice dentro da array;

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice];
    }else{
        return 'Aluno não está cadastrado';
    }
}

console.log(exibeNomeNota('Guilherme'));
