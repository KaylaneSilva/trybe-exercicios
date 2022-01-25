import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.fetchCharacteres = this.fetchCharacteres.bind(this);
    this.state = {
      characters: [],
    };
  }

  fetchCharacteres() {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({
        characters: data.results,
      })
    })
  }

  componentDidMount() {
    this.fetchCharacteres();
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Rick and Morty Characteres:
        </h1>
        <div className="body">
          { 
            characters.map(({ name, image }) => {
              return (
                <div className="container" key={ name }>
                  <h3>{ name }</h3>
                  <img src={ image } alt={ name }/>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
