class Human {

    //Propriedades podem ser definidas no construtor
    constructor (name, age) {
        this.name = name;
        this.age = age
    }

    //Métodos
    speak(){
        console.log("Olá, o meu nome é " + this.name + " e eu tenho " + this.age + " anos de idade.");
    }

    jump(){
        console.log(this.name + " esta pulando...");
    }

    eat(whatFood) {
        console.log(this.name + " está comendo " + whatFood + "...")
    }
}

let person1 = new Human("Jhon", 25);
let person2 = new Human("Mary", 30);

//Chamando os métodos
person1.speak();
person2.speak();

person1.eat("Pizza");
person2.eat("Fruta");;