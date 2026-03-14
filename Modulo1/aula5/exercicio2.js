let palavra = []
palavra = prompt("Digite uma palavra: ")

function ehpalindromo(palavra){   
let i, teste="", teste2=""
palavra = palavra.toLowerCase().replace(/[^a-z0-9]/g, "")//p ignorar espaços e letras maiusculas
for(i = 0; i < palavra.length; i++){
    palavra[i]
    teste += palavra[i]
    //console.log(teste)
}
for(i = palavra.length - 1; i >= 0; i--){
    palavra[i]
    teste2 += palavra[i]
    //console.log(teste2)
}

 return teste == teste2
}

console.log(ehpalindromo(palavra))

