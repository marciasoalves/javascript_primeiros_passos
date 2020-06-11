console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
    
);

const idadeComprador = 20;
const estaAcompanhada= false;
const temPassageComprada= true;

console.log("Destinos Possíveis");
console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //removendo item;
// }else if(estaAcompanhada == true){
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1,1); //removendo item;
// }else{
//     console.log("Não é maior de idade e não posso vender a pasagem");
// }


if(idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Boa Viagem!!!");
    listaDeDestinos.splice(1,1); //removendo item;
}else{
    console.log("Não é maior de idade e não posso vender a pasagem");
}

console.log("Embarque: \n\n");

if (idadeComprador >=18 && temPassageComprada){
    console.log("Boa Viagem!");
}else{
    console.log("VOcê não pode embarcar")
}




console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);




//if e else controla o fluxo do código
// = atribuição
//== igual

