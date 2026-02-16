//As classes podem ter propriedades privadas.
//Para manipular uma propriedade privada, utilizamos os métodos getters and setters.

class Person{
    #name;

    //Getter - um método especial que retorna um valor de um atributo/propriedade
    get getName(){
        return this.#name;
    }

    //Setter - um método especial que defini valor de um atributo/propriedade
    set setName(value){
        this.#name = value;
    }
}

let person1 = new Person()
person1.setName = "Fabio Landin";
console.log(person1.getName);

//Pra que usarmos getters and setters?

class ContaBancaria {
    #saldo;

    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    }

    sacarDinheiro(valor){
        if(valor > this.#saldo){
            console.log('Saldo insuficiente! ')
        }else{

        this.#saldo -= valor;
        console.log("Foi sacado " + valor + ". Ficou um saldo de: " + this.#saldo);
        }
    }
}

let minhaConta = new ContaBancaria(1000);

minhaConta.sacarDinheiro(500);
minhaConta.sacarDinheiro(300);
minhaConta.sacarDinheiro(500);
