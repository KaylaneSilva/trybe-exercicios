// Objeto e Forin

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// parte 1

// console.log('Bem vinda, ' + info.personagem)

// parte 2

info.recorrente = 'sim';

// console.log(info.recorrente);

// parte 3

for (const key in info) {
  // console.log(key);
}

// parte 4

for (const key in info) {
  // console.log(info[key]);
}

// parte 5

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "o último MacPatinhas",
  recorrente: "sim",
};

for (const key in info2) {
  if (key === 'recorrente' && info.recorrente == 'sim' && info2.recorrente == 'sim') {
  // console.log('Ambos recorrentes');
  } else {
    // console.log(info[key] + ' e ' + info2[key]);
  };
}

// Funções

// parte 1

function verificaPalindromo(word){
  for(index in word){
    if(word[index] != word[(word.length - 1) - index]){
      return false;
    }
  }
  return true;
}
function verificaPalindromo(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}

// console.log(verificaPalindromo('arara'));
// console.log(verificaPalindromo('desenvolvimento'));

// parte 2

let numbers = [2, 3, 6, 7, 10, 1]

function valueBig(numbers) {
  let maiorValor = 0;
  for ( let index in numbers) {
    if (numbers[maiorValor] < numbers[index]){
      maiorValor = index;
    }
  }
  return maiorValor
}

console.log(valueBig(numbers))