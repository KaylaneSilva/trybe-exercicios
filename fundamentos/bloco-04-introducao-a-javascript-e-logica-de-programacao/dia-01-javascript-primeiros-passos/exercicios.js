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

const pecasXadrez = 'bispo';

switch (pecasXadrez.toLocaleLowerCase()) {
  case 'rei':
    console.log('Rei-> Move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.');
    break;
  case 'bispo':
    console.log('Bispo-> Move em uma linha reta diagonalmente no tabuleiro');
    break;
  case 'rainha':
    console.log('Rainha-> Peça mais poderosa do jogo, uma vez que seu movimento combina o da torre e o do bispo, ou seja, pode mover-se pelas colunas, fileiras e diagonal de outra cor.');
    break;
  case 'cavalo':
    console.log('Cavalo -> movimenta-se sempre em "L",ou seja,duas casas para frente e uma para a esquerda ou direita. O cavalo é a única peça que pode pular sobre as outras, tanto as suas quanto as adversárias.');
    break;
  case 'torre':
    console.log('Torre -> Movimenta-se em direção reta pelas colunas ou fileiras.');
    break;
  case 'peão':
    console.log("Peão -> Movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal. Ao contrário das outras peças, o peão não pode mover-se para trás.");
    break;
  default:
    console.log('Erro, peça inexistente')
}