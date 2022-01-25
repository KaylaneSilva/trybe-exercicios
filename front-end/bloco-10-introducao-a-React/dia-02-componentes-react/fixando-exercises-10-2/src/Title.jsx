import React from "react";

class Title extends React.Component {
  render() {
   return <h1 className="title">Exercicios sobre {this.props.theme}</h1>;
  };
}

export default Title;