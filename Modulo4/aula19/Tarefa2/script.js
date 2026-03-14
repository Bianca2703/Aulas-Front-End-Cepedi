class Departamento {
#nome;
constructor(nome) { 
    this.#nome = nome;
}
get nome () { return this.#nome; }
}

class Empresa {
#nome; #departamentos;
constructor(nome) {
this.#nome = nome;
this.#departamentos = [];
}
get nome () { return this.#nome; }
adicionarDepartamento(departamento) {
    this.#departamentos.push(departamento)
}
listarDepartamentos(){
    for( let departamento in this.#departamentos){
        console.log(this.#departamentos[departamento].nome)
    }
}
}

let objetoEmpresa = new Empresa("IFMG")
let departamentoTI = new Departamento("TI")
let departamentoRH = new Departamento("RH")
let departamentoFinancas = new Departamento("Financas")


objetoEmpresa.adicionarDepartamento(departamentoTI)
objetoEmpresa.adicionarDepartamento(departamentoRH)
objetoEmpresa.adicionarDepartamento(departamentoFinancas)
objetoEmpresa.listarDepartamentos()