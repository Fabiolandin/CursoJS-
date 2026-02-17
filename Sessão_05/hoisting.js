//Hoisting é um conceito do JavaScript que permite que variaveis e funções sejam usadas
//antes de serem declaradas, o JavaScriptfaz uma varredura no código antes de executado
//movendo as funções e declarações para o topo, então podemos usar as variaveis antes de declarar

//Exemplo de hoisting 1
x = 5;
console.log(x);
var x;

//Exemplo de hoisting 2
var x;
x = 5;
console.log(x);

//Também pode ser aplicado em funções
console.log(sum(10, 20));

function sum(a, b){
    return a + b;
}