//Iteração sobre propriedades de um objeto é usado for in

const human = {
    name: "Jhon",
    age: 23,
    peso: 60.5
};

//Apresenta as propriedades do objeto human
for (let property in human) {
    console.log(property)
}

//Apresenta os valores do objeto human
for (let property in human){
    console.log(human[property])
}