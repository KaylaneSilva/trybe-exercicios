        // Parte 1

/* exercicio 1 
  Modifique a estrutura da função para que ela seja uma arrow function .
  Modifique as concatenações para template literals .
 */

const testScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testScope(true);