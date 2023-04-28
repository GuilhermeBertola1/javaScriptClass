// const listaCPFS = ['1245234645', '234356552', '34567687534'];
// const clientes = ['nome', 'andre', 'idade', '36'];

//O objeto serve para poder organizar informações distintas, pois o array não consegue;
//Obs Então olha só, no primeiro eu só tenho informações mais simples, só CPF, só no segundo array que está armazenando 
//mais de um tipo de informação, quero armazenar o nome, o valor do nome, idade, valor, se eu quiser armazenar o e-mail, 
//também começa a ficar um pouco mais complexo para armazenar isso só em um array, correto Ju?

//Correto, porque teríamos que dar um jeito de dizer que a informação nome, na string, nome, ela está relacionada a André, e a informação idade, a string 
//idade está relacionada a 36, e array, ela não permite isso, ela é só uma informação por índice e não tem nada que diga que essas informações elas são pares 
//ligados, nome a descrição do nome, a idade a descrição da idade, então por isso que array não funciona muito bem quando temos que passar esse tipo de informação.

//Isso ai Ju, então a ideia é que utilizemos alguma outra estrutura que tenhamos na linguagem que nos permita fazer de maneira mais 
//simplificada, mais harmônica, mais facilitada, e um dos recursos que temos, não só em JavaScript mas em outras linguagens também, são os objetos, 
//que são estruturas de dados que permitem você armazenar essas informações de maneira mais organizadas dentro de um único objeto.

const cliente = {
    nome:'Guilherme',
    idade:36,
    cpf:213435657568,
    email:'guilherme.@123gmail.com'
}