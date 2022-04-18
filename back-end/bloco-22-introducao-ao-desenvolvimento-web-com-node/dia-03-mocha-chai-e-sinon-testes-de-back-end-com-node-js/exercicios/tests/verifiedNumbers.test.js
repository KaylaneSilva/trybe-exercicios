const { expect } = require('chai');

const verifiedNumber = require('../verifiedNumbers');

describe('Teste com número -1', () => {
  it('Deve retorna negativo.', () => {
    const verifieNumber = verifiedNumber(-1);

    expect(verifieNumber).to.be.equal('negativo');
  })
});

describe('Teste com número 22', () => {
  it('Deve retornar positivo.', () => {
    const verifieNumber = verifiedNumber(22);

    expect(verifieNumber).to.be.equal('positivo');
  })
});

describe('Teste com número 0', () => {
  it('Deve retorna neutro', () => {
    const verifieNumber = verifiedNumber(0);

    expect(verifieNumber).to.be.equal('neutro');
  })
});

describe('Teste com string "Olá"', () => {
  it('Deve falhar', () => {
    const verifieNumber = verifiedNumber('Olá');
  const messageError = "Can't do the operation as it's not a number";

    expect(verifieNumber).to.be.equal(messageError);
  })
});