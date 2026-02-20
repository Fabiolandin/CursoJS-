let tarefas = []


function salvarDados() {
    const mensagem = document.getElementById("mensagem")
    let tarefa = document.getElementById('tarefa').value;

    if (tarefa == "") {
        let mensagemErro = "A tarefa não pode ser vazia!"
        mensagem.textContent = mensagemErro;
    } else {
        tarefas.push(tarefa);
        mensagem.textContent = "";
        renderizarDados()
    }
};

function renderizarDados() {

    //busca o elemento listaTarefas
    const listaTarefas = document.getElementById("listaTarefas")

    // limpa a lista pra não duplicar
    listaTarefas.innerHTML = "";

    let i = 0;
    for (let i = 0; i < tarefas.length; i++) {

        //Cria <li> dentro do elemento listaTarefas
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]

        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa);


    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarDados()
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa: ")
    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada
        renderizarDados()
    }
}

function limparLista() {
    tarefas.length = 0
    renderizarDados()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista limpa com sucesso!"
}