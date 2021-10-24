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

// exercicio 4
let novoParagrafo = document.createElement('p');
novoParagrafo.innerText = 'Novo parágrafo criado';
novaSection.appendChild(novoParagrafo);

// exercicio 5
let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
novoMain.appendChild(sectionLeft);

// exercicio 6
let sectionRigth = document.createElement('section');
sectionRigth.className = 'rigth-content';
novoMain.appendChild(sectionRigth);

// exercicio 7
let image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200';
sectionLeft.appendChild(image);