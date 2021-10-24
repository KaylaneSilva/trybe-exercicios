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

// exercicio 8
let newListNO = document.createElement('ul');
sectionRigth.appendChild(newListNO);
let conteudo = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let index in conteudo){
  const conteudoTag = document.createElement('li');
  conteudoTag.innerHTML = conteudo[index];
  newListNO.appendChild(conteudoTag);
}; 

// exercicio 9 e 11/2
  for (let quantidade = 1; quantidade < 4; quantidade++){
    let newH3 = document.createElement('h3')
    newH3.className = 'description';
    novoMain.appendChild(newH3)
  }


// parte 2

// exercicio 10/1
novaTag.className = 'title';

// exercicio 12/3
novoMain.removeChild(sectionLeft)