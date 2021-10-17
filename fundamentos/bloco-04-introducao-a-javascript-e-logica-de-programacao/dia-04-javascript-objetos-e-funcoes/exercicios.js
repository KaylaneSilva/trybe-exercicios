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
  console.log(key);
}