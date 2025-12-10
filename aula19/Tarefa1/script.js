class Pessoa{
    #nome; #cpf; #endereco;

    constructor(nome, cpf, logradouro, numero, bairro, cidade, estado, cep){
        this.#nome = nome
        this.#cpf = cpf
        this.#endereco = new Endereco(logradouro, numero, bairro, cidade, estado, cep)
    }
    get nome(){return this.#nome}
    mostrarEndereco(){
        console.log(`${this.#nome} - cpf: ${this.#cpf}, mora no endereço: ${this.#endereco}`)
    }
}

class Endereco{
    #logradouro; #numero; #bairro; #cidade; #estado; #cep;
    constructor(logradouro, numero, bairro, cidade, estado, cep){
        this.#logradouro = logradouro
        this.#numero = numero
        this.#bairro = bairro
        this.#cidade = cidade
        this.#estado = estado
        this.#cep = cep
    }
}

let pessoa1 = new Pessoa("Bianca", "111.111.111-11", "D","23", "sla","Ibirite", "MG", "23.456-78")
pessoa1.mostrarEndereco()
//console.log(pessoa1)