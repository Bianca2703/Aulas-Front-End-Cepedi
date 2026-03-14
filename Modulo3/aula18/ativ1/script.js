class Animal{
    #nome; #nPatas;
    constructor(nome, nPatas){
        this.#nome = nome
        this.#nPatas = nPatas
    }
    get nome(){return this.#nome}
    get nPatas(){return this.#nPatas}
    emitirSom(){
        return "som"
    }
}

class Cachorro extends Animal{
    constructor(nome, nPatas) {
        super(nome, nPatas)
    } 
    emitirSom(){
        console.log("au au")
    }
}

class Gato extends Animal{
    constructor(nome, nPatas) {
        super(nome, nPatas)
    } 
    emitirSom(){
        console.log("miau")
    }
}

class Passaro extends Animal{
    constructor(nome, nPatas) {
        super(nome, nPatas)
    } 
    emitirSom(){
        console.log("piu")
    }
    
}

let cachorro = new Cachorro("Thor", "4")
cachorro.emitirSom()
console.log(`O nome do cahcorro é ${cachorro.nome} e tem ${cachorro.nPatas} patas`)

let gato = new Gato("Sebastiao", "4")
gato.emitirSom()
console.log(`O nome do gato é ${gato.nome} e tem ${gato.nPatas} patas`)

let passaro = new Passaro("Tutu", "2")
passaro.emitirSom()
console.log(`O nome do passaro é ${passaro.nome} e tem ${passaro.nPatas} patas`)


let lista = []
lista.push(cachorro)
lista.push(gato)
lista.push(passaro)

console.log(lista)

for(let i = 0; i <= lista.length; i++ ){
    cachorro.emitirSom()
    gato.emitirSom()
    passaro.emitirSom()
}