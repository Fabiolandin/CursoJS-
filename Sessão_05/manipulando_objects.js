//Manipulando Objetos
const person = {
    name: 'Jhon',
    age:30
};

//Object.keys
console.log(Object.keys(person)); //Exibe ['name', 'age']

//Object.values
console.log(Object.values(person)); //Exibe ['Jhon', '30']

//Object.entries
console.log(Object.entries(person)); //Exibe [['name' , 'Jhon'], ['age', '30']]

//Object.assign
const person2 = Object.assign({}, person); //copiar person para person2

//Object.freeze
Object.freeze(person); //Impede alterações em person - CONGELA ELA
//person.name = 'Mary'; //Erro

//Object.seal
Object.seal(person); //Impede que novas propriedades sejam adicionadas a person
//person.height = 1.8; //Erro

//Object.isFrozen
console.log(Object.isFrozen(person)); //O objecto esta congelado? Exibe true = sim

//Object.isSealed
console.log(Object.isSealed(person)); //Exibe true