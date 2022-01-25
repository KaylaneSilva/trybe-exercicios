describe('Verifica se a chamada do callback de uma função uppercase transforma as letras de uma palavra em letras maiúsculas.', () => {

  const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  it('Verifica se "test é igual a "TEST"', (done) => {
    uppercase('test', (string) => {
      try {
        expect(string).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    })
  })
}) 