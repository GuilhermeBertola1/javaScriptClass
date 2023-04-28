const cliente = {
    nome:'Guilherme',
    idade:36,
    cpf:213435657568,
    email:'guilherme.@123gmail.com',
    fone:['8508340580384', '3890883604856'],
    dependentes: [
        {
            nome:'gabi',
            parentesco:'irmã',
            dataNascimento:'24/08/1997'}, 
        {
            nome:'Matilde Senna',
            parentesco:'Vó',
            dataNascimento:'27/05/1988'
        },
    ],
    saldo:100,
    depositar: function(valor){
        this.saldo += valor;
    },
    sacar: function(valor){
        this.saldo -= valor;
    }
};

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes('dependentes')){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
};

console.log(Object.keys(cliente));
console.log(Object.values(cliente));
console.log(Object.entries(cliente));

oferecerSeguro(cliente);