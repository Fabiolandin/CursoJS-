// classList contém um conjunto de métodos para adicionar, remover e alternar classes CSS de um elemento HTML
// classList.add() - adiciona uma ou mais classes CSS a um elemento HTML
// classList.remove() - remove uma ou mais classes CSS de um elemento HTML
// classList.toggle() - adiciona ou remove uma classe CSS de um elemento HTML, dependendo se a classe já existe ou não
// classList.replace() - substitui uma classe CSS por outra em um elemento HTML
// classList.item() - retorna o nome da classe CSS em uma posição específica

// classList.length - retorna o número de classes CSS em um elemento HTML
// classList.value - retorna uma string com todas as classes CSS de um elemento HTML

//Buscando elementos no DOM para manipular estilos
let titulo = document.querySelector('#titulo');
let inputNome = document.querySelector('input[name="nome"]');
let inputEmail = document.querySelector('input[name="email"]');

//Modificando o CSS
//ALTERANDO A COR DO TEXTO DO ELEMENTO TITULO PARA VERMELHO
titulo.classList.replace('text-slate-500', 'text-red-500');

//ADICIONANDO UM HOVER AZUL NO INPUT NOME
inputNome.classList.add('hover:bg-blue-700')