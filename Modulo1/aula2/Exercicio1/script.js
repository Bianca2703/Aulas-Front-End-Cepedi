
let depositoInicial = 500;
let taxa = 0.01; 
let depositoExtra = 200;
let retirada = 50;


let saldo = depositoInicial;
saldo += saldo * taxa;
saldo += saldo * taxa;
saldo += depositoExtra;
saldo += saldo * taxa;
saldo -= retirada;
saldo += saldo * taxa;
console.log("Saldo final ao final do 4º mês: R$ " + saldo.toFixed(2));


