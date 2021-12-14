import React from "react";

class Pokemon extends React.Component {
  render() {
    return (
      this.props.pokemons.map((animal) => {
        return <section className="pokemonContener">
          <div className="pokemonEspecific">
          <p>{animal.name}</p>
          <p>{animal.type}</p>
          <p>Average weight: {animal.averageWeight.value}{animal.averageWeight.measurementUnit}</p>
          </div>
          <div>
            <img src={animal.image}></img>
          </div>
        </section>
      })
    )
  }
}

Pokemon.prototype = {

}

export default Pokemon;
