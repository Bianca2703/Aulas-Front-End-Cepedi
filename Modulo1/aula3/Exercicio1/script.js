let nota1 = 9;
let nota2 = 5;
let nota3 = 8;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  console.log("Aluno aprovado");
} else if (media >= 5 && media < 7) {
  console.log("Aluno em recuperação");
} else if (media < 5) {
  console.log("Aluno reprova");
} else {
  console.log("Nota inválida");
}
