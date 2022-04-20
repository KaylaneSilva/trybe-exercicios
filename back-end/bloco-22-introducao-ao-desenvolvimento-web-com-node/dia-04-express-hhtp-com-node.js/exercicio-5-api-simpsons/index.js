const fs = require('fs').promises;
const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const { json } = require('express/lib/response');

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

app.get('/simpsons/:id', async (req, res) => {
  try {
    const getSimpsons = await readFileSimpsons();
    const { id } = req.params;
    const filteredById = getSimpsons.find(character => character.id === id);

    if (!filteredById) {
      res.status(404).json({ message: 'simpson not found'});
      return;
    }
    return res.status(200).json(filteredById);
  
  } catch (error) {
    return res.status(500).end();
  }
});

app.post('/simpsons', async (req, res) => {
  try {
    const getSimpsons = await readFileSimpsons();
    const { id, name } = req.body;
    const filteredById = getSimpsons.find(character => character.id === id);

    if (filteredById) {
      res.status(409).json({ message: 'id already exists'});
      return;
    }
    getSimpsons.push({id, name});
    return res.status(204).end();
  
  } catch (error) {
    return res.status(500).end();
  }
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo a porta 3001')
});