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
        this.#historicoEntradas += valorDeposito + "\n"
        return this.#saldo += valorDeposito;
       
    }

    sacar(valorSaque){
        if (this.#saldo > valorSaque) {
            this.#saldo -= valorSaque
            this.#historicoSaidas += valorSaque + "\n"
        }
        else{
            console.log("Saldo Insuficiente")
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
p1.depositar(600)
p1.depositar(5000)
p1.consultarSaldo()
p1.sacar(200)
p1.consultarSaldo()
p1.consultarHistoricoEntradas()
p1.sacar(900)
p1.consultarHistoricoSaida()
p1.consultarSaldo()

