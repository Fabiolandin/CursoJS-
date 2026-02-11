//Os operadores lógicos são usados para combinar expressões booleanas.
//Eles são frequentemente usados em estruturas de controle, como if, while e for


// AND (&&)
console.log(true && true);    //True
console.log(true && false);   //false
console.log(false && true);   //false
console.log(false && false);  //false

// OR (||)
console.log(true || true);    //
console.log(true || false);   //
console.log(false || true);   //
console.log(false || false);  //

//NOT (!)
console.log(!true);   //false
console.log(!false);  //true

//Exemplo prático (AND) = E
let age = 80;

if (age >= 18 && age <= 65){ //maior ou igual a 18 anos e menor ou igual a 65
    console.log('Pode dirigir');
} else {
    console.log('Não pode dirigir!');
}

//Exemplo prático (OR) = OU
if (age < 18 || age > 65){
    console.log('Não pode dirigir');
} else {
    console.log('Pode dirigir!')
}

//Exemplo prático de (NOT) = diferente
let isUser = true;
if (!isUser) {
    console.log('Voce precisa estar logado!')
} else {
    console.log('Bem vindo á pagina!')
}