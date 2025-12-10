const botaoAdicionarTarefa = document.getElementById("adicionarTarefa")

botaoAdicionarTarefa.addEventListener("click", function(){
    let inputNovaTarefa = document.getElementById("inputNovaTarefa")
    let tarefas = inputNovaTarefa.value 

    if(tarefas.trim() != ""){
        let listaTarefas = document.getElementById("listaTarefas")

        let novaTarefa = document.createElement("li")

        let spanTexto = document.createElement("span")
        spanTexto.textContent = tarefas

        let botaoRiscar = document.createElement("button")
        botaoRiscar.textContent = ("✓")
        botaoRiscar.classList.add("botaoTarefa")

        botaoRiscar.addEventListener("click", function(){
        spanTexto.classList.toggle("riscado")
        })

        let botaoExcluirTarefa = document.createElement("button")
        botaoExcluirTarefa.textContent = ("X")
        botaoExcluirTarefa.classList.add("botaoTarefa")

        botaoExcluirTarefa.addEventListener("click", function(){
            novaTarefa.remove()
        })
        
        novaTarefa.appendChild(spanTexto)
        novaTarefa.appendChild(botaoRiscar)
        novaTarefa.appendChild(botaoExcluirTarefa)

        listaTarefas.appendChild(novaTarefa)
        

        document.getElementById("mensagem").textContent = "Tarefa adicionada com sucesso!"
        inputNovaTarefa.value = "" 
    }
    else{
        document.getElementById("mensagem").textContent = "Tarefa inválida"
    }
})



