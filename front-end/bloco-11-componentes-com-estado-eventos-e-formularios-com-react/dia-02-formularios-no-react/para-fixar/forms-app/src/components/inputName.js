import React from "react";

class InputName extends React.Component {
  render() {
    const { handleChange, state } = this.props;

    return (
      <label>
        Nome
        <input
          className="div-inputs"
          name="nome"
          value={state}
          onChange={handleChange}
        />
      </label>
    )
  }
}

export default InputName;
