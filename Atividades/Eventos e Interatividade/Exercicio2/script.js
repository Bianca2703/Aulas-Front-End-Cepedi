let formularioValido
let botaoCadastrar = document.getElementById("Cadastrar")

botaoCadastrar.addEventListener("click", function(event){
let inputNome = document.getElementById("nome")
let nome = inputNome.value.trim()
let tamanhoNome = nome.length

let inputEmail = document.getElementById("email")
let email = inputEmail.value

let inputSenha = document.getElementById("senha")
let senha = inputSenha.value

let inputConfirmarSenha = document.getElementById("confirmaSenha")
let confirmaSenha = inputConfirmarSenha.value

let formularioValido = true;

document.getElementById("nomeErro").textContent = "";
document.getElementById("emailErro").textContent = "";
document.getElementById("senhaErro").textContent = "";
document.getElementById("confirmaSenhaErro").textContent = "";

    if(tamanhoNome < 3){
        document.getElementById("nomeErro").textContent = "Nome inválido. O nome deve conter no mínimo 3 caracteres."
        event.preventDefault()  
        formularioValido = false
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        document.getElementById("emailErro").textContent = "E-mail inválido. O e-mail deve conter os seguintes caracteres: '@', '.'. "
        event.preventDefault()
        formularioValido = false
    }
    if(senha.length < 6 || !/\d/.test(senha)){
        document.getElementById("senhaErro").textContent = "Senha inválida. A senha deve ter ao menos seis caracteres, incluindo um número no mínimo. "
        event.preventDefault()
        formularioValido = false
    }
    if(confirmaSenha !== senha){
        document.getElementById("confirmaSenhaErro").textContent = "Senha incorreta."
        event.preventDefault()
        formularioValido = false
    }

    if(formularioValido) {
    alert("Usuário Cadastrado com sucesso!");
}
})
