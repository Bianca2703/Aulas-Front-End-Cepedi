let a, b, operacao

a = Number(prompt("Digite o valor do primeiro número: "))
b = Number(prompt("Digite o valor do segundo número: "))
operacao = prompt("Qual a operação?(somar, subtrair, multiplicar ou dividir) ")

function somar(a,b){
    return (a + b)
}

function subtrair(a, b) {
    return (a - b)
}

function multiplicar(a, b) {
    return (a * b)
}

function dividir(a, b) {
    return (a / b)
}

function calcular(a, b, operacao){
    if (operacao == "somar") {
        return somar(a, b)
    }
    else if(operacao == "subtrair"){
        return subtrair(a, b)
    }
     else if(operacao == "multiplicar"){
        return multiplicar(a, b)
    }
     else{
        return dividir(a, b)
    }
    
}
let resultado = calcular(a, b, operacao)
console.log(resultado)