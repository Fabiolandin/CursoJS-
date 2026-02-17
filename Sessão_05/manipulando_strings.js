//Aqui estão alguns exemplos de algumas funções integradas prar strings em JavaScript.

const myString = "This is JavaScript";

// Lenght
console.log(myString.length); //conta e Exibe os caracteres:18

//indexOF
console.log(myString.indexOf('is')); //Exibe 2

//lastIndexof
console.log(myString.lastIndexOf('is')); //Exibe 5

//search
console.log(myString.search('is')); //Exibe 2

//slice
console.log(myString.slice(2, 4)); //Exibe 'is'

//substr
console.log(myString.substr(8, 4)); //Exibe 'Java'

//Replace
console.log(myString.replace('JavaScript', 'HTML')); //Exibe 'This is HTML!'

//toUpperCase
console.log(myString.toUpperCase()); //Exibe 'This is JavaScript'

// toLowerCase
console.log(myString.toLowerCase()); // exibe 'this is javascript!'

// concat
console.log(myString.concat(' And Python!')); // exibe 'This is JavaScript! And Python!'

// trim
const myString2 = ' This is JavaScript!';
console.log(myString2.trim()); // exibe 'This is JavaScript!'

// split
console.log(myString.split(' ')); // exibe ['This', 'is', 'JavaScript!']

// e existem muitas outras funções integradas para strings em JavaScript.