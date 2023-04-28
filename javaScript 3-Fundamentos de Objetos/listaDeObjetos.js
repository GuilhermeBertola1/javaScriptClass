const cliente = {
    nome:'Guilherme',
    idade:36,
    cpf:213435657568,
    email:'guilherme.@123gmail.com',
    fone:['8508340580384', '3890883604856'],
    dependentes: [{
        nome:'gabi',
        parentesco:'irmã',
        dataNascimento:'24/08/1997'
    }]
};

cliente.dependentes.push({
    nome:'Matilde Senna',
    parentesco:'Vó',
    dataNascimento:'27/05/1988'
});

//console.log(cliente);

const filtro = cliente.dependentes.filter(dependente => dependente.dataNascimento === '27/05/1988');
console.log(filtro);
console.log(filtro[0].nome);