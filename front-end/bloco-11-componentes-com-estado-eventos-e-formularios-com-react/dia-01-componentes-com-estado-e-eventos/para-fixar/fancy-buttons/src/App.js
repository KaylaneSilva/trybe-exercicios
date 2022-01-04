import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.handleClickOne = this.handleClickOne.bind(this);
  }

  handleClickOne () {
    console.log(this);
    console.log('Você clicou no botão 1');
  }
  
  handleClickTwo = () => {
    console.log(this);
    console.log('Você clicou no botão 2');
  }
  
  handleClickThree = () => {
    console.log('Você clicou no botão 3');
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.handleClickOne}>Botão 1</button>
        <button onClick={this.handleClickTwo}>Botão 2</button>
        <button onClick={this.handleClickThree}>Botão 3</button>
      </div>
    )
  }
}

export default App;
