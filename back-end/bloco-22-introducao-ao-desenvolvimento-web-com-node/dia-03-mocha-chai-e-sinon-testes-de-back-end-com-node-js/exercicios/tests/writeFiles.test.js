const { expect } = require('chai');
// const sinon = require('sinon');
// const fs = require('fs');

const writeFile = require('../writeFiles');

describe('Testando a função "writeFile"', () => {
  it('A resposta é uma string.', () => {
    const response = writeFile('arquivo1.txt', 'Uma frase qualquer.');
    
    expect(response).to.be.a('string');
  });

  it('A resposta é igual a "ok".', () => {
    const response = writeFile('arquivo1.txt', 'Outra frase qualquer.');
    
    expect(response).to.be.equals('ok');
  });
});