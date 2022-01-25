import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.handleClickOne = this.handleClickOne.bind(this);
    this.colorButton = this.colorButton.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }
  
  colorButton () {
    const clickNumber = this.state.numeroDeCliques;
    if (clickNumber % 2 === 0) return 'green';
    return 'white';
  }

  handleClickOne (numero) {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    console.log(`A cor do botão é: ${this.colorButton()}`)
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={() => {this.handleClickOne('1')}} 
        style={{background: this.colorButton()}}>Botão 1</button>
        <button onClick={() => {this.handleClickOne('2')}}
        style={{background: this.colorButton()}}>Botão 2</button>
        <button onClick={() => {this.handleClickOne('3')}}
        style={{background: this.colorButton()}}>Botão 3</button>
        <h4>Número de cliques: {this.state.numeroDeCliques}</h4>
      </div>
    )
  }
}

export default App;
