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
 let quadrado = document.getElementsByClassName('main-content')[0];
 let textoh1 = document.getElementsByTagName('h1');
 let paragrafoAll = document.getElementsByClassName('centerContent');

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
