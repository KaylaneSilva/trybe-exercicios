import React from "react";
import InputName from "./components/inputName";
import TextArea from "./components/TextArea";

class Forms extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      termo: false,
      regiao: '',
      assunto: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <section>
        <h1> Formulário</h1>
        <div>
          <form className="forms">
            <fieldset>
              <h4>Pré-Cadastro</h4>
              <InputName
                handleChange={this.handleChange}
                state={this.state.nome}
              />
              <label>
                <input
                  type='checkbox'
                  name="termo"
                  onChange={this.handleChange}
                />
                Você aceita os termos e diretrizes
              </label>
              <label>
                Região
                <select
                  className="div-inputs"
                  name="regiao"
                  value={this.state.regiao}
                  onChange={this.handleChange}
                >
                  <option></option>
                  <option>Norte</option>
                  <option>Nordeste</option>
                  <option>Centro-Oeste</option>
                  <option>Sul</option>
                  <option>Sudeste</option>
                </select>
              </label>
              <label>
                Coloque sua foto:
                <input
                  className="div-inputs"
                  name='arquivo'
                  type='file'
                />
              </label>
            </fieldset>
            <TextArea
              handleChange={this.handleChange}
              state={this.state.assunto}
            />
          </form>
        </div>
      </section>
    )
  }
}

export default Forms