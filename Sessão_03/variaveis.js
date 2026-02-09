// variaveis do mesmo tipo podem ser declaradas em uma linha só
var number1 = 10, number2 = 20, number3 = 30; //evite usar var, use let ou const
let number4 = 10, number5 = 20, number6 = 30; //pratica mais comum
let name1 = "Steve", name2 = "Mike", name3 = "Praça"; //pratica mais comum


let number1 = number2 = number3 = 10; //todas as variaveis tem o mesmo valor

// também é possivel
let number1 = 10,
    number2 = 20,
    number3 = 30;

let number1 = 10
    , number2 = 20
    , number3 = 30;

// e também é possivel
let myName = "Steve", age = 50, isMarried = true;

//apresentar  os valores das variaveis no console
console.log(myName);
console.log(age);
console.log(isMarried);
