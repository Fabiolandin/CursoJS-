//as variaveis com let não podem ser declaradas duas vezes dentro do mesmo scopo

var name = "Steve";
var name = "Mike"; //vai funcionar, porém não é uma boa prática

let age = 50;
let age = 40; //vai dar erro, não vai rodar
//conclusão: evite usar var, use let ou const


// não podemos declarar nomes de variaveis com palavras reservadas da linguagem como:
let let = 90;
let break = 90;
let continue = 90;
let function = 90;
