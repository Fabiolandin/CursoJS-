/* 
Independentemente do tipo de selector de elemento, vamos ver como podemos 
manipular o conteúdo e os atributos de um elemento.
*/

// vamos alterar o texto de um elemento
document.querySelector('#titulo').innerHTML = "Formulário de Registro"
//ou
document.querySelector('#titulo').textContent = "Formulário de Registros"

//Alterar o texto do label para adicionar html no meio #SÓ FUNCIONA COM INNERHTML
document.querySelector('label[for="nome"]').innerHTML = "Nome completo <strong>(username)</strong>:"

//Alterar o valor de um input
document.querySelector('input[name="nome"]').value = "João Ribeiro";

//Vamos colocar o foco no input email
document.querySelector('input[name="email"').focus();

//Inserir a mesma senha nos inputs de senhas e confirmar senha
let senha = "123456";
document.querySelectorAll('input[type="password"]').forEach( input => {
    input.value = senha;
})