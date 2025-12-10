class Retangulo{
    constructor(nome, altura, largura){
        this.nome = nome;
        this.altura = altura;
        this.largura = largura;
    }
    obterNome(){}
    calcularPerimetro(altura, largura){
        let perimetro = (altura*2) + (largura*2)
        return (`O perímetro do retângulo é ${perimetro}`)
    }
    calcularArea(altura, largura){
        let area = altura * largura
        return (`A área do retângulo é ${area}`)
    }
    atualizarLargura(largura){
        this.largura = novaLargura
        return largura
    }
    atualizarAltura(altura){
        this.altura = novaAltura
        return altura
    }
}

let retangulo1 = new Retangulo("Retangulo", 20, 30)

retangulo1.calcularArea()