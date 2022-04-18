const { expect } = require('chai');

describe('Teste com número -1', () => {
  it('Deve retorna negativo.', () => {
    const verifiedNumber = verifieNumber(-1);

    expect(verifiedNumber).to.be.equal('negativo');
  })
});

describe('Teste com número 22', () => {
  it('Deve retornar positivo.', () => {
    const verifiedNumber = verifieNumber(22);

    expect(verifiedNumber).to.be.equal('positivo');
  })
});

describe('Teste com número 0', () => {
  it('Deve retorna neutro', () => {
    const verifiedNumber = verifieNumber(0);

    expect(verifiedNumber).to.be.equal('neutro');
  })
});