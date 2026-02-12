//Funções aninhadas, é uma função declarada dentro de outra função.

function myFunction(){
    console.log("Hello World!");

    function myNestedFunction() {
        console.log("Hello Universe!");
    }

    myNestedFunction()
}

myFunction();

///Exemplo de closure
function criarContador(){
    let contador = 0; //variavel privada

    return function() { //função interna (closure)
        contador += 1;
        return contador;
    }
}

const contador1 = criarContador(); //criar um contador
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3