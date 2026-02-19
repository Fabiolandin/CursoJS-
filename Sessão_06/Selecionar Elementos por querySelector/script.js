//Selecionando elementos do DOM utilizando querySelector e querySelectorAll

//Exemplo simples de seleção de um elemento com querySelector
const elemento1 = document.querySelector('#paragrafo');
elemento1.innerHTML = "ESTE ELEMENTO FOI MODIFICADO";

// # - Seleciona um elemento com o id
// . - Seleciona um elemento com a classe
const elemento2 = document.querySelector('.text-3xl');
elemento2.innerHTML = "ESTE ELEMENTO FOI BUSCADO";