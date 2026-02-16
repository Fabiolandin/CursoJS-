//Herança permite que uma classe herde propriedades e métodos de outra classe

//Herança
class Animal {

    name = "";
    species = "";

    constructor(name, species){
        this.name = name;
        this.species = species;
    }

    identify(){
        console.log("Sou um " + this.species + " e o meu nome é " + this.name);
    }
}

//A classe dog herda as propriedades e métodos da classe Animal
class Dog extends Animal{
    bark() {
        console.log("woof woof")
    }
}

let dog1 = new Dog("Bob", "Cão");
dog1.identify();
dog1.bark();