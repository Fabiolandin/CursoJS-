//crie uma arrow function que retorne seu nome e sobrenome
const nome = (firstname, lastname) => firstname + " " + lastname;
console.log(nome('Fabio', 'Landin'))

//Crie uma função para calcular 2 números, e crie um loop com 10 iterações
//soma o indice do loop com o número 5
function sum(a, b) {
    return a + b;
}

for (let i = 1; i < 11; i++) {
    console.log(sum(5, i));
}

//Crie uma função para saber se um numero de 0 a 10 é par ou impar

function parimpar(number){
    if(number % 2 ===0){
        return 'par';
    } else {
        return 'impar';
    }
}

for (let cont = 1; cont < 11; cont++) {
    console.log("O número "+cont+" é "+parimpar(cont))
}
