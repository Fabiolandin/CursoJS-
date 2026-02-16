//Computed names significa que podemos criar métodos e propriedades de uma classe usando expressões
//Podemos criar métodos e classes com nomes dinamicos, que podem ser criados em tempo de execução.

//Computed names
class Human {

    ["full" + "Name"](){
        return "John Doe"
    }
}

let human = new Human();
console.log(human.fullName()); //Jhon Doe
