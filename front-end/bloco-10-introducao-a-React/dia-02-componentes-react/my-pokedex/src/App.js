import './App.css';
import React from 'react';
import Data from './data'
import Pokedex from './Pokedex'
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        {/* <Pokemon pokemons={Data}/> */}
        <Pokedex pokemons={Data}/>
      </div>
    )
  }
}

export default App;
