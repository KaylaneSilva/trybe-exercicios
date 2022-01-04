import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.handleClickOne = this.handleClickOne.bind(this);

    this.state = {
      numeroDeCliques: 0
    }
  }

  handleClickOne (numero) {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    console.log(`Você clicou no botão ${numero}`);
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={() => {this.handleClickOne('1')}}>Botão 1</button>
        <button onClick={() => {this.handleClickOne('2')}}>Botão 2</button>
        <button onClick={() => {this.handleClickOne('3')}}>Botão 3</button>
        <h4>Número de cliques: {this.state.numeroDeCliques}</h4>
      </div>
    )
  }
}

export default App;
