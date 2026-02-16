//Encapsulamento - restringir o acesso aos componentes do objeto
//Em javascript o encapsulamento pode ser alcançado utilizando métodos privados

class Person {

    #name = ""; //O # defini uma propriedade privada

    constructor(name){
        this.#name = name; //Defini o nome da pessoa.
    }

    //Getter - usado para acessar as propriedades privadas
    get getName(){
        return this.#name;
    }

    //Setter - usado para alterar as propriedades privadas
    set setName(value){
        if(value=="") {
            this.#name = "Não definido";
        } else {
            this.#name = value;
        }
    }

}

let person1 = new Person("Jhon");
console.log(person1.getName);
person1.setName = "Steve";
console.log(person1.getName);