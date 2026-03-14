class SaldoInsuficienteError extends Error{
    constructor(){
        super("Saldo insuficiente para saque")
        this.name = "SaldoInsuficienteError"
    }
}

class ValorInvalido extends Error{
    constructor(){
        super("Valor inválido")
        this.name = "ValorInvalidoError"
    }
}

class ContaBancaria{
    #saldo;
    #nomeTitular;
    #historicoEntradas = "";
    #historicoSaidas = "";

    constructor(saldo, nomeTitular){
        this.#saldo = saldo
        this.#nomeTitular = nomeTitular
    }

    get consultarSaldo(){
        return this.#saldo
    }

    get nomeTitular(){
        return this.#nomeTitular
    }

    set historicoEntradas(entradas){
        this.#historicoEntradas = entradas
    }

    set historicoSaidas(saidas){
        this.#historicoSaidas = saidas
    }

    depositar(valorDeposito){
        if(isNaN(valorDeposito) || typeof valorDeposito !== "number"){
            throw new ValorInvalido()
        }else{
        this.#historicoEntradas += valorDeposito + "\n"
        return this.#saldo += valorDeposito;
        }
    }

    sacar(valorSaque){
        if (this.#saldo > valorSaque) {
            this.#saldo -= valorSaque
            this.#historicoSaidas += valorSaque + "\n"
        }
        else{
            throw new SaldoInsuficienteError()
        }
    }

    consultarSaldo(){
        console.log(`Saldo: ${this.#saldo}`)
    }

    consultarHistoricoEntradas(){
        console.log(`Histórico de entradas: \n${this.#historicoEntradas}`)
    }

    consultarHistoricoSaida(){
        console.log(`Histórico de saídas: \n${this.#historicoSaidas}`)
    }
}

let p1 = new ContaBancaria(500, "João", 0, 0)
try{
p1.depositar(600)
p1.depositar(5000)
p1.consultarSaldo()
p1.sacar(200)
p1.consultarSaldo()
p1.consultarHistoricoEntradas()
p1.sacar(900)
p1.consultarHistoricoSaida()
p1.consultarSaldo()
} catch(erro){
    console.log(`Erro: ${erro.name}`)
    console.log(`${erro.message}`)
}
