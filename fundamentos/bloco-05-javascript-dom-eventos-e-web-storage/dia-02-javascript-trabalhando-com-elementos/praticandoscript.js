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
let acesarSegundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho')
let acessarTerceiroFilho= document.getElementById('terceiroFilho')
let acessarQuartoEUltimoFilho= document.getElementById('quartoEUltimoFilho')

// parte I 

// exercicio 1
let imprimirElementoOndeVoce = ondeVoceEsta.parentNode;
console.log(imprimirElementoOndeVoce)

// exercicio 2
imprimirElementoOndeVoce.style.color = 'green';