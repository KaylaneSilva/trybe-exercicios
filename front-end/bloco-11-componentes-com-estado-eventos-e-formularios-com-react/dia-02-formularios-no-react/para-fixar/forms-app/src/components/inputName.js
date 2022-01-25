import React from "react";

class InputName extends React.Component {
  render() {
    const { handleChange, state } = this.props;

    let error = undefined;
    if(state.length > 100) error = "Número de caracteres inválido";
    
    return (
      <label>
        Nome
        <input
          className="div-inputs"
          name="nome"
          value={state}
          onChange={handleChange}
        />
        <span className="error-message">{error ? error : ''}</span>
      </label>
    )
  }
}

export default InputName;
