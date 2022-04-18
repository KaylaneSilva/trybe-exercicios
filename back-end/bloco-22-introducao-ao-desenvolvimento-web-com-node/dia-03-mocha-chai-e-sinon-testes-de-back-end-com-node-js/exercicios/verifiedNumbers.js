const verifiedNumber = (number) => {
  if(number < 0) {
    return 'negativo';
  };
  if(number === 0) {
    return 'neutro';
  };
  return 'positivo';
};

module.exports = verifiedNumber;