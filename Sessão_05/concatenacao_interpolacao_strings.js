//Concatenação: é o processo de juntar uma ou mais strings para formar uma única string.
//Interpolação: é o processo de inserir valores dentro de uma string
//Para usar a interpolação preciamos usar Template Literals que são um tipo de strings
//que permitem a interpolação dentro delas, usando a sintaxe `${}`. 

//Concatenação
const string1 = 'Hello';
const string2 = 'World';

console.log(string1 + ' ' + string2); //forma comum

//Concatenação - concat
console.log(string1.concat(' ', string2));

//Template Literals
//Os template literals são strings que permitem incorporar expressões.
//São delimitadas pelo acento grave (` `) em vez de aspas simples ou duplas.
//podem conter placeholders, indicados pelo simbolo $ ou chaves ($(expressão))

//Exemplo 1
const string3 = "Hello";
const string4 = "World";

console.log(`${string3} ${string4}`); //Exibe o Hello World

// Exemplo 2
const number1 = 10;
const number2 = 20;

console.log(`A soma de ${number1} e ${number2} é ${number1 + number2}.`)