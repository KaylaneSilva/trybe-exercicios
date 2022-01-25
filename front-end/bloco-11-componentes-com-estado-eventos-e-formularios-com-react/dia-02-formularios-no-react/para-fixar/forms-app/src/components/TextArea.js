import React from "react";

class Textarea extends React.Component {
  render() {
    const { handleChange, state } = this.props;

    let error = undefined;
    if(state.length < 100 && state.length > 0) error = "Número de caracteres inválido";

    return (
      <label>
        Resume seu assunto
        <textarea
          className="div-resume"
          name='assunto'
          maxLength={300}
          value={state}
          onChange={handleChange}
        ></textarea>
        <span className="error-message">{error ? error : ''}</span>
      </label>
    )
  }
}

export default Textarea;