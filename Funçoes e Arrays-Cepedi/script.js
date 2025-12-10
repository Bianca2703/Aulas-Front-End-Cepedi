let controleItens = [] 

const botaoAdicionar = document.getElementById("adicionar");
const containerAdd = document.getElementById("containerAdd")

botaoAdicionar.addEventListener("click", function adicionar(){
    if(containerAdd.innerHTML == ""){
    let input = document.createElement("input") 
    input.type = "text"
    input.placeholder = "Digite o novo produto..."
    containerAdd.appendChild(input)

    let enviar = document.createElement("button")
    enviar.textContent = "Enviar"
    containerAdd.appendChild(enviar)
    enviar.addEventListener("click", function(){
        if(input.value != ""){
        let produto = input.value
        controleItens.push(produto)
        input.value = ""
        }else{
        alert("Texto Inválido!! Digite um texto válido")
        }
    })
    }
})
    
const botaoMostrar = document.getElementById("mostrar")
const containerMostrar = document.getElementById("containerMostrar")

botaoMostrar.addEventListener("click", function mostrar(){
    let lista = document.createElement("p")
    lista = controleItens
    document.writeln(lista)

})//corrigir!!! fzr voltar na pagina inicial


const botaoRemover = document.getElementById("remover")
const containerRemover = document.getElementById("containerRemover")

botaoRemover.addEventListener("click", function remover(){
    let input2 = document.createElement("input") 
    input2.type = "text"
    input2.placeholder = "Escolha entre tirar o primeiro(1) ou o último(2) elemento"
    containerRemover.appendChild(input2)

    let enviar2 = document.createElement("button")
    enviar2.textContent = "Enviar"
    containerRemover.appendChild(enviar2)
    enviar2.addEventListener("click", function(){
        if(input2.value == 1){
            controleItens.shift();
            input2.value = ""
        }
        else if(input2.value == 2){
            controleItens.pop()
            input2.value = ""
        }
    })
})

const botaoAtualizar = document.getElementById("atualizar")
const containerAtualizar = document.getElementById("containerAtualizar")

botaoAtualizar.addEventListener("click", function atualizar(){
    let input3 = document.createElement("input") 
    input3.type = "text"
    input3.placeholder = "Escolha entre tirar o primeiro(1) ou o último(2) elemento"
    containerAtualizar.appendChild(input3)

    let enviar3 = document.createElement("button")
    enviar3.textContent = "Enviar"
    containerAtualizar.appendChild(enviar3)
    enviar3.addEventListener("click", function(){
        input3.value = "" 
    })

    let input4 = document.createElement("input") 
    input4.type = "text"
    input4.placeholder = "Escolha entre tirar o primeiro(1) ou o último(2) elemento"
    containerAtualizar.appendChild(input4)

     let enviar4 = document.createElement("button")
    enviar4.textContent = "Enviar"
    containerAtualizar.appendChild(enviar4)
    enviar4.addEventListener("click", function(){
        for(let i = 0 ; i < controleItens.length ; i++){
            if(controleItens[i] == input3.value){
                controleItens[i] = input4.value
            }
        }
    })


})

    /*let input2 = document.createElement("input") 
    input2.type = "text"
    input2.placeholder = "Digite o novo preço..."
    preco = input2.textContent
    controleItens.push(preco)*/