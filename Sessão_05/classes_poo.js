//Classes são formas de renderizar o código e organizar funcionalidades em JavaScript.
//As classes são uma forma de programar orientado a objetos, onde podemos criar objetos
//que representam entidades do mundo real e definir comportamentos para esses objetos.

class Human {

    myName; //propriedade da classe
    myAge;

    //Constructor - função que é chamada automaticamente quando um objeto é criado
    constructor(name, age){
        this.myName = name;
        this.myAge = age;
    }

    //Métodos de uma classe
    talk() {
        console.log('Estou a falar');
    }

    walk(){
        console.log('Estou a andar')
    }

}

//Criando um objeto a partir classe human.
const person = new Human('Jhon', 25);

//Acessar uma propriedade do objeto person
console.log(person.myName);
person.myName = 'João';
console.log(person.myName);

//Acessar os métodos do objeto person
person.talk();
person.walk();