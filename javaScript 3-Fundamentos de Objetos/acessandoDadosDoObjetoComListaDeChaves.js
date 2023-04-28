const cliente = {
    nome:'Guilherme',
    idade:36,
    cpf:213435657568,
    email:'guilherme.@123gmail.com'
};

const chaves = ['nome', 'idade', 'cpf', 'email'];
//notação de conchetes cliente[];
//não consegue utilizar a notação de ponto(cliente.chaves), pois é a chaves é uma variavel e está fora do objeto, então deve ser 
//utilizado com a notação [](conchetes);
//e quando utilizamos a notação de ponto o javascript ele acessa o objeto para poder pegar a chave porem a nossa variavel está fora 
//do objeto então acontece o valor volta indefinido;

//console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));

//podemos utilizar a string na notação de conchete, porem não usa muito;

console.log(cliente["nome"]);