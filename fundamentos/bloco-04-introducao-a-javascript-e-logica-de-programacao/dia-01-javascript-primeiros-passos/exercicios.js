// const a = 9;
// const b = 28;

// // parte 1

// const soma = a + b;
// console.log (soma)

// const subtracao = a - b;
// console.log (subtracao)

// const multiplicacao = a * b;
// console.log (multiplicacao)

// const divisao = a / b;
// console.log (divisao)

// const modulo = a % b;
// console.log (modulo)

// parte 2

// let c = 747;
// let d = 653;

// if (c > d) {
//   console.log("c é maior que d");
// } else {
//   console.log("d é maior que c");
// };

// parte 3

// const e = 738;
// const f = 398;
// const g = 947;

// if ( e > f && e > g) {
// console.log ("'e' é maior que 'f' e 'g'")
// } else if (f > e && f > g) {
//   console.log ("'f' é maior que 'e' e 'g'")
// } else {
//   console.log ("'g' é maior 'e' e 'f'")
// };

// parte 4 

// const numero = 0;

// if (numero > 0) {
// console.log ("positivo")
// } else if (numero < 0) {
//   console.log ("negativo")
// } else {
//   console.log (0)
// }

// parte 5

// let anguloA = 80;
// let anguloB = 90;
// let anguloC = 10;

// let triangulo = anguloA + anguloB + anguloC;

// if (triangulo === 180) {
//   console.log ("É um triângulo")
// } else {
//   console.log ("Não é um triângulo")
// };

// parte 6

// const pecasXadrez = 'bispo';

// switch (pecasXadrez.toLocaleLowerCase()) {
//   case 'rei':
//     console.log('Rei-> Move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.');
//     break;
//   case 'bispo':
//     console.log('Bispo-> Move em uma linha reta diagonalmente no tabuleiro');
//     break;
//   case 'rainha':
//     console.log('Rainha-> Peça mais poderosa do jogo, uma vez que seu movimento combina o da torre e o do bispo, ou seja, pode mover-se pelas colunas, fileiras e diagonal de outra cor.');
//     break;
//   case 'cavalo':
//     console.log('Cavalo -> movimenta-se sempre em "L",ou seja,duas casas para frente e uma para a esquerda ou direita. O cavalo é a única peça que pode pular sobre as outras, tanto as suas quanto as adversárias.');
//     break;
//   case 'torre':
//     console.log('Torre -> Movimenta-se em direção reta pelas colunas ou fileiras.');
//     break;
//   case 'peão':
//     console.log("Peão -> Movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal. Ao contrário das outras peças, o peão não pode mover-se para trás.");
//     break;
//   default:
//     console.log('Erro, peça inexistente')
// }

// parte 7

// const nota = 89;

// if (nota < 0 || nota > 100){
//   console.log('Nota incorreta');
// }else if (nota >= 90){
//   console.log('A')
// }else if (nota >= 80){
//   console.log('B')
// }else if (nota >= 70){
//   console.log('C')
// }else if (nota >= 60){
//   console.log('D')
// }else if (nota >= 50){
//   console.log('E')
// }else if (nota < 50){
//   console.log('F')
// };

// parte 8

const h = 20;
const i = 53;
const j = 89;
const par = 0;

if(h %2 == par || i %2 == par || j %2 == par){
	// console.log(true)
}else{
	// console.log(false)
};

// parte 9

// const pega do exercicio 8
if(h %2 != par || i %2 != par || j %2 != par){
	// console.log(true)
}else{
	// console.log(false)
};

// parte 10

const valorCusto = 89;
const valorCustoTotal = valorCusto + (valorCusto * 0,2);
const valorVenda = 159;
const lucro = valorVenda - valorCustoTotal;

if(lucro >= 0) {
 console.log('Você teve lucro')
}else {
  console.log('!!!Erro!!! Você está no vermelho')
};

// parte 11

let aliquotaINSS;
let aliquotaIR;

const salarioBruto = 1684.58

if(salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if(salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if(salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88
}

const salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
  aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
  aliquotaIR = (salarioBase * 0.275) - 869.36;
};

console.log("Salário: " + (salarioBase - aliquotaIR));
