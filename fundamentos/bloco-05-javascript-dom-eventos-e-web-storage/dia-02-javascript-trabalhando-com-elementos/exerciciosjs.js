// exercicio 1
let acessarBody = document.body;
  let novaTag = document.createElement('h1');
  novaTag.id = 'tirulo1';
  novaTag.innerText = 'Exercício 5.2 - JavaScript DOM';
  acessarBody.appendChild(novaTag);

// exercicio 2
let novoMain = document.createElement('main');
novoMain.className = 'main-content';
acessarBody.appendChild(novoMain);

// exercicio 3
let novaSection = document.createElement('section');
novaSection.className = 'center-content';
novoMain.appendChild(novaSection);

