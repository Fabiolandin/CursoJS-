//Crie uma variavel numerica com valor 100
//Verifique se é maior ou igual a 100
//Verifique se é maior ou igual a 50
//Verifique se é menor que 50

let number = 100;

if(number >= 100) {
    console.log("O número é maior ou igual a 100");
} else if (number >= 50){
    console.log('O número é maior ou igual a 50');
} else if (number < 50) {
    console.log('O número é menor que 50')
}

//Defina duas variaveis númericas e atribua os valores 10 e 20
//crie uma estrutura condicional que verifica se:
//ambos os núm são maiores que 10, pelomenos um dos núm é maior que 10, nenhum dos núm é maior que 10

let number1 = 10;
let number2 = 20;

if (number1 > 10 && number2 > 10){
    console.log('Os dois números são maiores que 10')
} else if (number1 > 10 || number2 > 10){
    console.log('Um dos números é maior que 10')
} else if (number1 < 10 && number2 < 10){
    console.log("Nenhum dos dois números é maior que 10")
}