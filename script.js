function mostarTarefa() {
    let tarefa = document.getElementById("task-input").value
    let lista = document.getElementById("task-list")

    if (tarefa.trim() === "") {
        return
    }

    let button = document.createElement("button")
    button.textContent = "Feita"
    button.addEventListener("click", function() {
        item.style.textDecoration = "line-through"
    })

    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Excluir"
    deleteButton.addEventListener("click", function() {
        lista.removeChild(item)
    })

    let item = document.createElement("li")
    item.textContent = tarefa + " e o número de tarefas concluídas é: " + contarTarefasConcluidas()
    lista.appendChild(item)
    item.appendChild(button)
    item.appendChild(deleteButton)


    document.getElementById("task-input").value = ""
}

function contarTarefasConcluidas() {
    let lista = document.getElementById("task-list")
    let tarefasConcluidas = lista.querySelectorAll("li button:nth-child(2)")
    let contador = 0

    tarefasConcluidas.forEach(function(button) {
        contador++
    })

    return contador
}   