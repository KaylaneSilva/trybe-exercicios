import React from "react";

class Textarea extends React.Component {
  render() {
    const { handleChange, state } = this.props;

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
      </label>
    )
  }
}

export default Textarea;