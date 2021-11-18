// exercicio 1 
const dados = (nomeCompleto) => {
  const email = `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`
  return {
    nome: nomeCompleto,
    email: email,
  }
}

const newEmployees = (dados) => {
  const employees = {
    id1: dados('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: dados('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: dados('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees(dados))

// exercicio 2

const sorteio = (numerosSorteados, myNumber) => {
  if (myNumber === numerosSorteados()) {
    return 'Parabéns você ganhou!!'
  }
  return 'Tente novamente. :('
}

const numerosSorteados = () => {
  let numeroSorteado = Math.round(Math.random() * 5);
  return numeroSorteado;
}

// console.log(sorteio(numerosSorteados, 4));

// exercicio 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const gabarito = (rightAnswers, studentAnswers, callback) => {
  let checkagem = [];
  for (let index = 0; index < studentAnswers.length; index += 1) {
    if (studentAnswers[index] === rightAnswers[index]) {
      checkagem += 'a,';
    }
    if (studentAnswers[index] === 'N.A') {
      checkagem += 's.r,';
    }
    checkagem += 'e,';
  }
  return callback(checkagem);
  // return checkagem;
}

let pontuacao = (array) => {
  let pontos = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === 'a') {
      pontos += 1;
    } 
    if (array[index] === 'e') {
      pontos -= 0.5;
    }
  }
  return pontos
}
// console.log(pontuacao(['a','e','s.r','e','a','e','a','e','a','e','e','s.r','e','a','e','a','e','e']))
console.log(gabarito(RIGHT_ANSWERS, STUDENT_ANSWERS, pontuacao));
// console.log(gabarito(RIGHT_ANSWERS, STUDENT_ANSWERS))