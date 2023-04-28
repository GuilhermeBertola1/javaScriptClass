const notas = [10, 6.5, 8, 7.5];

somaDasNotas = 0;

//O forEach é uma função callback, porque o parametro da função(ForEach), não é strings ou numeros, mas sim uma outra função;

// notas.forEach(nota => {
//     somaDasNotas += nota
// });

//Utilizamos uma função arrow function mas podemos tambem utilizar uma função normal com function oi (){blabla};
               //function callback;
notas.forEach(function(nota){
    somaDasNotas += nota;
})

let media = somaDasNotas/notas.length;

console.log(media);