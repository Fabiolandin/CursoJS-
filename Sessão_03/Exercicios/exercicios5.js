//Ana 28 anos,  Carl 22 anos, Jhon 30 anos
//Some a idade dos 3 e exiba no console
//De a média de idade

let Ana = {
    nome: 'Ana',
    idade: 28
}

let Carl = {
    nome: 'Carl',
    idade: 22
}

let Jhon = {
    nome: 'Jhon',
    idade: 30
}

let soma = Ana.idade + Carl.idade + Jhon.idade
let media = soma / 3

console.log("A soma das idades é de "+ soma);
console.log("A média de idades é de "+ media.toFixed(2));
