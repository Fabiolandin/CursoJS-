//Arrow functions são funções anonimas que podem ser atribuida variaveis passadas como argumentos
//para outras funções ou retornadas de outras funções.

//função normal
function sum(a, b) {
    return a + b;
}

sum(5, 10); //retorna 15

//Arrow function
const sum = (a, b) => {
    return a + b;
}

sum(5, 10); //retorna 15

//Arrow function com retorno implicito
const sum = (a, b) => a + b;

sum(5, 10); //retorna 15