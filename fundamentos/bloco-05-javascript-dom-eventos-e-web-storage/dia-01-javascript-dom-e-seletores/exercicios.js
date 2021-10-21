/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 1- Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 2- Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 3- Crie uma função que mude a cor do quadrado vermelho para branco.
 4- Crie uma função que corrija o texto da tag <h1>.
 5- Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 6- Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

 let paragrafo = document.getElementsByTagName('p');
 let paragrafoZero = document.getElementsByTagName('p')[0];
 let quadrado = document.getElementsByClassName('main-content')[0];
 let textoh1 = document.getElementsByClassName('title');
 let paragrafoFundo= document.getElementsByClassName('center-content')[0];

//  parte 1
 function mudandoOParagrafo (p) {
   paragrafo[1].innerText = 'Me vejo trabalhando em uma empresa que eu goste e com minha carreira alvancada';
   return paragrafo;
 }
 console.log(mudandoOParagrafo(paragrafo));

//  parte 2
function amareloParaCorNova (color) {
    quadrado.style.background = 'rgb(76,164,109)';
  return;
}
console.log(amareloParaCorNova(quadrado));

// parte 3

function VermelhoParaBranco(cor) {
  paragrafoFundo.style.background = 'white';
  return;
}
console.log(VermelhoParaBranco(paragrafoFundo));

// parte 4

function corrigirTexto(texto) {
  textoh1[0].innerText= 'Exercício 5.1 - JavaScript';
  return;
}
console.log(corrigirTexto(textoh1))

// parte 5
function maiusculo(text) {
  paragrafoZero.innerHTML = paragrafoZero.innerHTML.toUpperCase();
  return;
}
console.log(maiusculo(paragrafoZero));

// parte 6
function todosParagrafos(tag) {
 for (let tags = 0; tags < paragrafo.length; tags++) {
   console.log(paragrafo[tags].innerHTML) 
 }
}
console.log(todosParagrafos(paragrafo));