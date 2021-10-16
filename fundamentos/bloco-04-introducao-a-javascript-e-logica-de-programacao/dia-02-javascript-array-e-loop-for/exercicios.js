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
  console.log("Valor maior que 20")
}else{
  console.log("Valor menor que 20")
};