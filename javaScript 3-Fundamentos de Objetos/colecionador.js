const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",
    
    adicionarTipo:function(propriedade,tipo){
        this[propriedade].push(tipo)
    }
};

console.log(colecionador.nome);

console.log(colecionador["nome"]);

//Na primeira forma utilizamos a notação de ponto, muito comum em linguagens como Java e C. 
//No segundo exemplo, acessamos usando os colchetes, de modo similar a acessar um array indexado por uma string. 
//No JavaScript, objetos são classificados também como um array associativo (map ou dicionário).

//Mas por que é importante saber disso?

//Nesta linguagem as propriedades são expressas como strings e podem ser manipuladas em tempo de execução, 
//o que confere uma flexibilidade muito grande na hora de escrever código . Vamos adicionar dinamicamente 
//uma série de tipos de quadrinhos à lista de tipos do objeto colecionador. Adicione ao objeto a função abaixo:

for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+i)
};

console.log(colecionador.tipocolecao);