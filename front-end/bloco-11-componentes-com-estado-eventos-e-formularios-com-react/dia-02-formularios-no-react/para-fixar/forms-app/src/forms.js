import React from "react";

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
              <label>
                Nome
                <input
                  className="div-inputs"
                  name="nome"
                  value={this.state.nome}
                  onChange={this.handleChange}
                />
              </label>
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
            <label>
              Resume seu assunto
              <textarea
                className="div-resume"
                name='assunto'
                maxLength={300}
                value={this.state.assunto}
                onChange={this.handleChange}
              ></textarea>
            </label>
          </form>
        </div>
      </section>
    )
  }
}

export default Forms