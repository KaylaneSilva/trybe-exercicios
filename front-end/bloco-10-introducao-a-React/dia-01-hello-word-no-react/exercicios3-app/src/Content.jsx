import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className="content">
      {conteudos.map((tema, index)=> (
        <section className="conteudo" key = {tema, index}>
        <h3>Parte {index + 1}</h3>
        <p>
          O conteúdo é: {tema.conteudo}
          Status: {tema.estado}
          Bloco: {tema.bloco}
        </p>
      </section>
      ))}
    </div>
    )
  }
};

export default Content;
