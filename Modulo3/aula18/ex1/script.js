class Pessoa{
    #nome; #cpf;
    constructor(nome,cpf){
        this.#nome = nome
        this.#cpf = cpf
    }
    get nome(){return this.#nome}

    apresentar(){
        console.log(`Meu nome é ${this.#nome}`)
    }
}

class Aluno extends Pessoa {
    #matricula; #curso;
    constructor(nome, cpf, matricula, curso) {
        super(nome, cpf)
        this.#matricula = matricula
        this.#curso = curso

    }
    get curso(){return this.#curso}
    apresentar() {
        //console.log(`Sou ${this.nome}, do curso ${this.#curso}.`);
        super.apresentar()
        console.log(`sou um aluno`)
    }
}

let objetoPessoa = new Pessoa("Ana","123")
let objetoAluno = new Aluno("Bia", "456", " 2025502", "React")
objetoPessoa.apresentar()
objetoAluno.apresentar()

console.log(`${objetoAluno.nome}`)
console.log(`Curso: ${objetoAluno.curso}`)