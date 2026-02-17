//Polimorfismo é um conceito de POO que permite que um objetivo ou método tenha várias formas.
//No Javascript, o polimorfismo é alcançado através da herança de classes e da sobrescrita de métodos

class Animal {

    name ="";
    species="";

    constructor(name, species){
        this.name = name;
        this.species = species;
    }

    identify(){
        console.log("Sou um " + this.species + " e o meu nome é " + this.name);
    }
}

//A classe dog herda as propriedades e métodos da classe Animal
class Dog extends Animal {

    //A classe dog tem um novo método
    bark(){
        console.log("Woof Woof")
    }

    //A classe dog sobrescreve o método identify() da classe animal
    identify(){
        console.log("Sou um cão e o meu nome é " + this.name);
    }
}

let cao = new Dog("Bob", "Cão");
cao.identify();

//O método identify da classe animal já não está acessivel na classe Dog
//foi sobrescrito pelo método identidify() da classe dog
//este tipo polimorfismo é chamado de sobrescrita de métodos

//Existe polimorfismo de dois tipos:
//Polimorfismo por sobreposição(overriding) //em javascript só se existe polimorfismo deste tipo
//Polimorfismo por sobrecarga(overloading)