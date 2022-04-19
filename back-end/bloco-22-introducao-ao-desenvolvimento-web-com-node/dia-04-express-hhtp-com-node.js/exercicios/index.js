const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.json({ message: 'pong'});
});

app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.json({ message: `Hello, ${name}` });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});