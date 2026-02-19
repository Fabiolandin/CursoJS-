/* 
Vamos aprender a selecionar elementos do DOM utilizando o método mais conhecido:
getElementById
getElementByName
getElementsByTagName
getElementsByClassName
*/

// getElementById
let elementoPorId = document.getElementById('paragrafo');
elementoPorId.innerHTML = "Este foi o elemento selecionado";

// getElementByName
let elementosPorNome = document.getElementsByName('outro_paragrafo');
if(elementosPorNome.length > 0){
    elementosPorNome[0].innerHTML = "ESTE FOI O ELEMENTO SELECIONADO!"
}

// getElementsByTagName
let elementosPorTag = document.getElementsByTagName('p');
if (elementosPorTag.length > 0){
    elementosPorTag[0].innerHTML = "Este foi o elemento selecionado"
}

// getElementsByClassName
let elementosPorClasse = document.getElementsByClassName('text-blue-500');
if(elementosPorClasse.length > 0){
    for (let i = 0; i < elementosPorClasse.length; i++){
        elementosPorClasse[i].innerHTML = "Este foi o elemento de classe selecionado";
    }
}
