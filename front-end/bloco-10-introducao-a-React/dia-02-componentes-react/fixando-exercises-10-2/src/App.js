import React from 'react';
import './App.css';

import Image from './Image';

class App extends React.Component {
  render() {
    const linkImage = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
    return (
      <Image source={linkImage} alternativeText='Cute cat staring'/>
    )
  }
}

// 1 - Qual o nome do componente declarado acima?
  //O componente acima se chama Image.
// 2 - Chame o componente Image , de forma que seja mostrada esta imagem, ou o texto Cute cat staring , caso a imagem não consiga ser carregada.

export default App;
