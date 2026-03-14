let contaBancaria = {
    titular: "Bianca",
    saldo: 1000,
    depositar(valor){return this.saldo = this.saldo + valor },
    retirar(valor){
        if(valor <= this.saldo){
            this.saldo = this.saldo - valor
        }else{
            console.log("Saldo insufuciente!")
        }
    },
    exibirSaldo: function(){
        console.log(`Saldo: ${this.saldo}`)
    },
};

contaBancaria.exibirSaldo()
contaBancaria.depositar(500)
contaBancaria.exibirSaldo()
contaBancaria.retirar(200)
contaBancaria.exibirSaldo()
contaBancaria.retirar(2000)
contaBancaria.exibirSaldo()
