//Crie uma classe com das propriedades, nome e sobrenome, e um método que devolva
//o nome completo. Instancie e teste seu método.

class Human {

    //Propriedades
    nome="";
    sobrenome="";

    //Construtores
    constructor(nome, sobrenome){
        this.myNome = nome;
        this.mySobrenome = sobrenome;
    }

    //Métodos de uma classe
    nomecompleto(){
        console.log(this.myNome + " " + this.mySobrenome);
    }
}

const Person1 = new Human("Fabio", "Landin")
Person1.nomecompleto();

//Faça uma classe com uma propriedade name
//Esta propriedade deve ser privada e acessivel apenas através de um getter e setter.

class Homosapiens {
    //Propriedade
    #nome;

    //getter
    get getName(){
        return this.#nome;
    }

    //Setter
    set setName(value){
        this.#nome = value;
    }

    talk(){
        console.log("Meu nome é: " +this.#nome);
    }
}

let person2 = new Homosapiens()
person2.setName = "Mike Papa";
console.log(person2.getName);
person2.talk();
