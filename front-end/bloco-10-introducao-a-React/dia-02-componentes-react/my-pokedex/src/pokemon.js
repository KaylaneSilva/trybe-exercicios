import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const {pokemon: {name, type, averageWeight, image}} = this.props
    return (
        <section className="pokemonContener">
          <div className="pokemonEspecific">
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
          </div>
          <div>
            <img src={image}></img>
          </div>
        </section>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
