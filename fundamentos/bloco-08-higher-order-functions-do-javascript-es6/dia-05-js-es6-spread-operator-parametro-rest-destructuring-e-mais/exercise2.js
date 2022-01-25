// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...numbers) => {
  let result = 0
   numbers.forEach((value) => result += value);
   return result;
}
console.log(sum(1, 2, 3, 4, 5, 6
  ))