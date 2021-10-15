// exercicio1

const myName = 'Kaylane';
const birthCity = "Guarulhos";
// birthCity = 'Taubaté'
let birthYear = 2002;
birthYear = 2030;

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// teste para segunda parte do fixando aprendizagens

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

// console.log (typeof patientId);
// console.log (typeof patientAge);

// exercicio 2 

const base = 5;
let heigth = 8;

const area = base * heigth;
const perimeter = 2*base + 2*heigth;

// console.log (area)
// console.log (perimeter)

// exercicio 3

const notaDesafio = 50;

if(notaDesafio >= 80){
  // console.log ('Parabéns!! Você foi aprovada(o)!')
}else if(notaDesafio <= 80 && notaDesafio >= 60) {
  // console.log ('Você está na lista de espera')
}else {
  // console.log ('Você foi reprovada(o)')
};

// exercicio 4

// operador AND
const currentHour = 12;
let message = null;

if(currentHour >= 22){
  message = 'Não deveríamos comer nada, é hora de dormir'
}else if (currentHour >= 18 && currentHour < 22){
message = 'Rango da noite, vamos jantar :D'
}else if(currentHour >= 14 && currentHour < 18){
  message = 'Vamos fazer um bolo para o café da tarde?'
}else if(currentHour >= 11 && currentHour <= 14) {
  message = 'Hora do almoço!!!'
}else {
  message = 'Hmmm, cheiro de café recém passado'
};

// console.log (message)

// operador OR

let weekDay = 'sábado';

if( weekDay == 'segunda-feira' || weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira') {
  // console.log('Oba, mais um dia de aprendizado na Trybe >:D')
}else {
  // console.log('FINALMENTE, descanso merecido UwU')
};

// exercicio 5

const estadoCandidata = 'aprovada';

switch (estadoCandidata) {
  case 'aprovada':
    console.log('Aprovada')
    break;
  
  case 'lista':
    console.log("Lista de espera")
    break;
  
  case 'reprovada':
    console.log('Reprovada')
    break;
  
  default:
    console.log('Não se aplica');
};

// .