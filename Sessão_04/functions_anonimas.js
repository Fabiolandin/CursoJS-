//Aula sobre funções anonimas e return

let myFunction = function (){
    console.log("Hello World!")
}

myFunction();

//Returns
function myFunction2() {
    return 1;
}

let result = myFunction2();

console.log(result);

function soma(a, b) {
    return a + b
}

function multiply(a, b){
    return a * b
}

let x = 10;
let y = 5;

console.log(soma(x, y));
console.log(multiply(x, y));