const cities = ['New York', 'Rio de Janeiro', 'Boston', 'Los Angeles'];

//Lengh
console.log(cities.length); //conta quantos elementos

//IndexOf
console.log(cities.indexOf('Boston')) //retorna o indice do item boston

//Push
cities.push('São Paulo'); //Adiciona São Paulo no final do array

//Pop
cities.pop(); //remove o ultimo elemento do array

//unshift
cities.unshift('São Paulo'); //Adiciona elemento no começo do array

//Shift
cities.shift(); //Remove o primeiro elemento do array

//Splice
cities.splice(1, 1) //Remove 1 elemento a partir do indice 1

//sort()
cities.sort() //Ordena o Array

//reverse()
cities.reverse() // Inverte o Array

//join
console.log(cities.join(' - '))  //Junta os arrays com -
