let temp = Number(prompt("Digite a temperatura: "))
let escala = prompt("Qual a escala?(1-Celsius/ 2- Fahrenheit) ")
let escala2 = prompt("Qual a escala de conversão?(1-Celsius/ 2- Fahrenheit/ 3- Kelvin) ") 
// e se eu usar um vetor que vai receber a temp e a escala, e verificar a ultima posição do vetor(escala) p decidir qual conversão fzr?

function celFa(temp){
    temp = (temp * 1.8) + 32
    return temp
}

function faCel(temp){
    temp = (temp - 32) / 1.8
}

function celKe(temp){
    temp += 273
}

function converterTemperatura(temp, escala, escala2){
    if(escala == "Celsius" && escala2 == "Fahrenheit"){
        return celFa(temp)
    }
    else if(escala == "Fahrenheit" && escala2 == "Celsius"){
        return faCel(temp)
    }
    else if(escala == "Celsius" && escala2 == "Kelvin"){
        return celKe(temp)
    }
}