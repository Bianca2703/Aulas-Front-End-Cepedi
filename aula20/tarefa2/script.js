class NotANumberError extends Error{
    constructor(){
        super("O valor deve ser um número válido")
        this.name = "NotANumeberError"
    }
}

function informarNumero(valor){
    if(typeof valor !== "number" || Number.isNaN(valor)){
        throw new NotANumberError();
    }
    return valor
}

try{
    console.log(informarNumero("A"))
}catch(erro){
    console.log(`Erro capturado: ${erro.message}`)
}