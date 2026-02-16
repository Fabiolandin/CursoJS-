//Crie uma classe com um animal de estimação.
//tem que ter as propriedades nome, peso, especie
//Métodos: comer, dormir, e brincar

class Animal{

    //Propriedades
    constructor(nome, peso, especie){
        this.nome = nome;
        this.peso = peso;
        this.especie = especie;
    }

    //Métodos
    comer(comida){
        console.log("O " + this.nome + " esta comendo " + comida);
    }

    dormir(){
        console.log("O " + this.nome + " esta dormindo....");
    }

    brincar(brinquedo){
        console.log("O " + this.nome + " esta brincando com o " + brinquedo)
    }

}

const animal1 = new Animal("Neymar", 100, "Ave");

//chamando métodos
animal1.comer("Banana");
animal1.dormir();
animal1.brincar("Poleiro");