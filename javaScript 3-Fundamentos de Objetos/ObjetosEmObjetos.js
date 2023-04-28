const cliente = {
    nome:'Guilherme',
    idade:36,
    cpf:213435657568,
    email:'guilherme.@123gmail.com',
    fone:['8508340580384', '3890883604856']
};

cliente.dependentes = {
    nome:'gabi',
    parentesco:'irmã',
    dataNascimento:'24/08/1997'
};

console.log(cliente);

cliente.dependentes.nome = 'Gabriela Fontes Bertola'

console.log(cliente);