//No JavaScript os vetores são chamados de arrays
//São utilizados para armazenar dados de forma mais eficiente

//Exemplo de um array de strings
let names = ['Jhon', 'Mary', 'Bob']; //FORMA MAIS COMUM

//Exemplo de um array de números
let Numbers = [1, 2, 3, 4, 5]; //FORMA MAIS COMUM

//Também podemos ter os mesmos arrays tipados de uma forma diferente
let names2 = new Array('Jhon', 'Mary', 'Bob');
let number2 = new Array(1, 2, 3, 4,5);

//Para acessar os arrays, em JS fazemos por indice
console.log(names2[0]); //Jhon
console.log(names2[1]); //Mary
console.log(names2[2]); //Bob

//Para adicionar um novo elemento no array
names2.push('Peter');

//Para remover o ultimo elemento do array
names2.pop()

//Para adicionar um novo elemento no inicio do array
names.unshift('Peter');

//Para remover o primeiro elemento do array
names.shift();

//Para acessar o ultimo dado de qualquer array
console.log(names2[names2.length - 1])
