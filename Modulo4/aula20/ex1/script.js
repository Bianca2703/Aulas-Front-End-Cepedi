console.log("Início do programa")
let nome = "IFMG"

try{
    console.log(nome)
}
catch(error){
console.log("Tipo do erro: " + error.name)
console.log("Detalhe do erro: " + error.message)
}
finally{
    console.log("Fim do try-catch")
}

console.log("Fim do programa")