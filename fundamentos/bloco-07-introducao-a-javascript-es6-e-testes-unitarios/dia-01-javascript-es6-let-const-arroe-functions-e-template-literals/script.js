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

// testScope(true);

/* exercicio 2
  Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
 */

let oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordemCrescente = (numerosOrdenados) => {
  let ordenados = [2, 3, 4, 7, 10, 13]
  const message = `Os números ${ordenados} se encontram ordenados de forma crescente!`
  console.log(message)
}
  // ordemCrescente(numerosOrdenados);
  ordemCrescente(oddsAndEvens)