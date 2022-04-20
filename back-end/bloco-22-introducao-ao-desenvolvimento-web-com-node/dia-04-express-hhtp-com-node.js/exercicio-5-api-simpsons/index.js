const fs = require('fs').promises;
const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');

const app = express();
app.use(bodyParser.json());

const readFileSimpsons = async () => {
  const fileContent = await fs.readFile('./simpsons.json');
  return JSON.parse(fileContent);
};

app.get('/simpsons', async (_req, resp) => {
  try {
    const getSimpsons = await readFileSimpsons();
    return resp.status(200).json(getSimpsons);
  } catch (error) {
    return res.status(500).end();
  }
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo a porta 3001')
});