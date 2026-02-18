//Nan significa "Not a Number" é um valor especial em JavaScript que representa um valor 
// que não é um número válido. NaN é um valor númerico, mas não é igual a nenhum outro valor 
// incluindo ele mesmo. ou seja NaN é diferente de NaN.

//NaN frequentemente o resultado de operações que não produzem um número válido. Vejamos alguns exemplos:

console.log(NaN); //NaN
console.log(typeof NaN); //number

//Exemplo de NaN 2
let number = 123.456;
console.log(number / "hello"); //NaN

//Exemplo de NaN 3
console.log(Math.sqrt(-1)); //NaN

//Exemplo de NaN 4
console.log(0 / 0); //NaN

//Exemplo de NaN 5
console.log(NaN == NaN);
