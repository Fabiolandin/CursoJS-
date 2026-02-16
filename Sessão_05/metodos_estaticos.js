//As classes podem também ter métodos estaticos.
//Métodos estáticos são métodos que pertencem a classe e não a uma instancia da classe.
//Isso sifnifica que podemos chamar um método estatico sem criar uma instancia da classe.
//Podemos também criar classes cujos métodos não precisam de instancias no objeto para ser chamado.


class Human {

    //Método não estáticos
    talk() {
        console.log("Estou falando...")
    }

    //Método estático. Usamos uma palavra static para definir um método estático.
    static walk(){
        console.log("Estou andando...")
    }
}

let person = new Human();

person.talk(); //Não estatico - o método só esta disponivel através da instancia de uma classe

Human.walk(); //Estático - o método esta disponivel atravéz da classe, não é necessario uma instancia