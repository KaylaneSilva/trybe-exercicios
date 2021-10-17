// parte 1

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
for(let index = 0;index < numbers.length;index++){
// console.log(numbers[index])
}

// parte 2

let ressultAdd = 0;
for(let index = 0; index < numbers.length; index++) {
  ressultAdd += numbers[index]
};
// console.log(ressultAdd)

// parte 3

let resultMed = ressultAdd / numbers.length;
// console.log(resultMed);

// parte 4

if(resultMed >= 20) {
  // console.log("Valor maior que 20")
}else{
  // console.log("Valor menor que 20")
};

// parte 5

let maiorValor = numbers[0];

for(let index = 1; index < numbers.length; index++) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index];
  }
}
// console.log(maiorValor);

// parte 6

let impares = 0;

for(let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    impares += 1;
  }
}

if(impares === 0) {
  // console.log('nenhum valor ímpar encontrado');
}else {
  // console.log(impares);
}

// parte 7

let menorValor = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (menorValor > numbers[i]){
    menorValor = numbers[i];
  }
}

console.log(menorValor)