import React from 'react';
import './App.css';

import Image from './Image';
import Title from './Title';
import Order from './Order'

class App extends React.Component {
  render() {
    const linkImage = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'

    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };
    return <div>
      {/* Parte 1 - Props
       1 - Qual o nome do componente declarado acima?
          O componente acima se chama Image.
       2 - Chame o componente Image , de forma que seja mostrada esta imagem, ou o texto Cute cat staring , caso a imagem não consiga ser carregada. */}
      <Title theme='Props' />
      <Image source={linkImage} alternativeText='Cute cat staring' />
      {/* Parte 2 - Composiçãote de Componentes 
        1 -  O que o componente App é em relação a Order ?
          --O componete App é pai do componen Order
        2 - Complete o código acima de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App . */}
      <Title theme='Composição de Componentes' />
      <Order order={headphone}/>
      <Order order={energyDrink}/>
    </div>
  }
}

export default App;
