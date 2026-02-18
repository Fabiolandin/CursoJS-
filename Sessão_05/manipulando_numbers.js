//Manipulando números
let number = 123.456;

//tofixed() - devolve uma string com o núm escrito com um núm especificado em casas decimais arredondando
console.log(number.toFixed(0)); //123
console.log(number.toFixed(0)); //123.5
console.log(number.toFixed(0)); //123.46

//toprecision() - devolve uma string com o número escrito com um comprimento especificado
console.log(number.toPrecision()); //123.456
console.log(number.toPrecision(1));//1e+2
console.log(number.toPrecision(2));//1.2e+2

//toString() - devolve um número como uma string
console.log(number.toString()); //123.456
console.log(typeof number.toString()); //string

//toExponential() - devolve uma string com o número arredondado e escrito em notação exponencial
console.log(number.toExponential()); //1.23456e+2
console.log(number.toExponential(1));//1.2e+2

//toLocaleString() - devolve uma string com uma representação do número sensivel ao idioma
console.log(number.toExponential());//123.456
console.log(number.toExponential("pt-br"));//123,456