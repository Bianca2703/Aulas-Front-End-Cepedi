class ValorInvalidoErro extends Error{
    constructor(mensagem){
        super("Valor Inválido")
        this.name = "ValorInvalido"
    }
}

class DivisaoPorZeroErro extends Error{
    constructor(mensagem){
        super("Divisão por zero")
        this.name = "DivisaoPorZero"
    }
}

try{
    let a = 1
    let b = "l" 
    let resultado = a/b 
    if(isNaN(resultado)){
        throw new ValorInvalidoErro
    }
    if(resultado == Infinity || resultado == -Infinity){
        throw new DivisaoPorZeroErro
    }
    console.log(`Resultado: ${resultado}`)
}
catch(erro){
console.log(`Erro: ${erro.name}`)
console.log(`Detalhe: ${erro.message}`)
}