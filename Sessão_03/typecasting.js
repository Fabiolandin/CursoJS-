//O Type Casting é o processo de conversão de um tipo de dado para outro tipo de dado.
//Existem dois tipos de Type Casting, o implicito e o explicito

//Converter um número para string
let score = 100;
console.log(score.toString());
//ou
console.log(String(score));

//Converter Boolean para string
let iShow = true;
console.log(iShow.toString());
//ou
console.log(String(iShow)); // 'true'

//Convertendo string para number
let pontos = '100';
console.log(Number(score)); //100
//ou
console.log(parseInt(score)); //100

//Exemplo de conversão IMPLICITA
//O JavaScript faz a conversão implicita automaticamente quando necessario
let pontos1 = 100;
let pontos2 = '101';
console.log(pontos1+pontos2); //100101 - CONVERTE PONTOS 1 PARA STRING E FAZ UMA CONCATENAÇÃO

//Exemplo de conversão EXPLICITA
console.log(pontos1+Number(pontos2)); //200 - converte pontos2 para número e faz uma soma com pontos1

//Converter boolean para string
let isShow = true;
console.log(isShow.toString()); //'true'
//ou
console.log(String(isShow)); //'true'