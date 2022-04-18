const fs = require('fs');

const writeFile = (fileName, fileContent) => {
  fs.writeFileSync(`./${fileName}`, fileContent);
  return 'ok';
};

module.exports = writeFile;