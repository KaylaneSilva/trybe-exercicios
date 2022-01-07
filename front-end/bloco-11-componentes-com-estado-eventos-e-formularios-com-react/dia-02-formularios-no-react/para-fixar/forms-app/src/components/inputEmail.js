import React from "react";

class InputEmail extends React.Component {
  render() {
    const { handleChange, state } = this.props;

    let error = undefined;
    if(!state.match(/^\S+@\S+$/i) && state.length > 2) error = "Email Inválido";
    
    return (
      <label>
        Email
        <input
          className="div-inputs"
          type="email"
          name="email"
          value={state}
          onChange={handleChange}
        />
        <span className="error-message">{error ? error : ''}</span>
      </label>
    )
  }
}

export default InputEmail;
