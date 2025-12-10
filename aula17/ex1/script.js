class Pessoa{
    #nome;
    #endereco;
    constructor(nome, endereco){
        this.#nome = nome;
        this.#endereco = endereco
    }
    getNome(){
        return this.#nome
    }
    getEndereco(){
        return this.#nome
    }
    modificarEndereco(novoEnderco){
        this.#endereco = novoEnderco
    }
    imprimirInfo(){//retorna nome da pessoa mora em slaoq
        console.log(`O nome é ${this.#nome} e ela mora em ${this.#endereco}`)
    }
}

let p1 = new Pessoa("Jonas", "Ibirité")
p1.imprimirInfo
console.log(p1.getEndereco())
p1.modificarEndereco("Belo Horizonte")
p1.imprimirInfo