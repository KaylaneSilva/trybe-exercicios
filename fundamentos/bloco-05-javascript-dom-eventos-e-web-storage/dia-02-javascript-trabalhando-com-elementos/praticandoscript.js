/*
1-Acesse o elemento 'elementoOndeVoceEsta'

2-Acesse pai a partir de 'elementoOndeVoceEsta' e adicione uma color a ele.

3-Acesse o 'primeiroFilhoDoFilho' e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

4-Acesse o primeiroFilho a partir de 'pai' 

5-Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta

6-Agora acesse o texto Atenção! a partir de 'elementoOndeVoceEsta'

7-Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta

8-Agora acesse o terceiroFilho a partir de pai
*/

let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta')
let acessarPai = document.getElementById('elementoOndeVoceEsta')
let acessarPaiDoPai = document.getElementById('paiDoPai')
let acessarPrimeiroFilho = document.getElementById('primeiroFilho')
let acessarPrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
let acessarSegundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho')
let acessarTerceiroFilho = document.getElementById('terceiroFilho')
let acessarQuartoEUltimoFilho = document.getElementById('quartoEUltimoFilho')

// parte I 

// exercicio 1
let imprimirElementoOndeVoce = ondeVoceEsta.parentNode;
// console.log(imprimirElementoOndeVoce);

// exercicio 2
let ondeVoceEstaParaPai = imprimirElementoOndeVoce.parentNode; ondeVoceEstaParaPai.style.color = 'green';

// exercicio 3
acessarPrimeiroFilhoDoFilho.innerText = 'Olá, seja bem-vindo a essa página';

// exercicio 4
let primeiroFilhoAPartirPai = acessarPai.firstChild
// console.log(primeiroFilhoAPartirPai);

// exercicio 5
// console.log(ondeVoceEsta.parentNode);

// exercicio 6
let textoSegundoFilho = ondeVoceEsta.nextSibling;
// console.log(textoSegundoFilho);

// exercicio 7
// console.log(ondeVoceEsta.nextElementSibling);

// exercicio 8
// console.log(acessarPai.nextElementSibling);

// extra
acessarTerceiroFilho.innerText = 'Terceiro Filho Elemento';


// Parte II

/* 1 - Crie um irmão para elementoOndeVoceEsta .
2 - Crie um filho para elementoOndeVoceEsta .
3 - Crie um filho para primeiroFilhoDoFilho .
4 - A partir desse filho criado, acesse terceiroFilho .*/

// exercicio 1
let criaNovoElemento = document.createElement('section');
criaNovoElemento.id = 'irmaoOndeVoceEsta'
acessarPai.appendChild(criaNovoElemento);
let acessarIrmaoOndeVoceEsta = document.getElementById('irmaoOndeVoceEsta')
acessarIrmaoOndeVoceEsta.innerText = 'Criando um elemento irmão para o #elementoOndeVoceEsta';
acessarIrmaoOndeVoceEsta.style.color = 'blue'

// exercicio 2
let filhoOndeVcEsta = document.createElement('section')
filhoOndeVcEsta.id = 'filhoOndeVoceEsta'
ondeVoceEsta.appendChild(filhoOndeVcEsta)

filhoOndeVcEsta.innerText = 'Criado novo filho para o <strong>elementoOndeVoceEsta</strong>'
filhoOndeVcEsta.style.color = 'rgb(53, 134, 121)'

// exercicio 3 e 4
let filhoDoFilhoPrimeiroFilho = document.createElement('section')
filhoDoFilhoPrimeiroFilho.id = 'filhoDoPrimeiroFilho'
primeiroFilhoDoFilho.appendChild(filhoDoFilhoPrimeiroFilho)

// console.log(filhoDoFilhoPrimeiroFilho.parentElement.parentElement.nextSibling.nextSibling)


// Parte III

let filhosPai = acessarPai.childNodes
for (let index = filhosPai.length - 1; index >= 0; index -=1)
if (filhosPai[index].id !== 'elementoOndeVoceEsta') {
  filhosPai[index].remove()
}

acessarSegundoEUltimoFilhoDoFilho.remove();

console.log(acessarPai);