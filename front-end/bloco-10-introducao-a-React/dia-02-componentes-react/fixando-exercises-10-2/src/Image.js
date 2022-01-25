import React from 'react';

class Image extends React.Component {
  render() {
    return <img  className='image' src={this.props.source} alt={this.props.alternativeText} />;
  }
}

// 1 - Qual o nome do componente declarado acima?
  //O componente acima se chama Image.

export default Image;