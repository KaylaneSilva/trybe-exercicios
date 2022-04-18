const verifiedNumber = (number) => {
  if(typeof number !== 'number' ) {
    return "Can't do the operation as it's not a number"
  }

  if(number < 0) {
    return 'negativo';
  };
  if(number === 0) {
    return 'neutro';
  };
  return 'positivo';
};

module.exports = verifiedNumber;