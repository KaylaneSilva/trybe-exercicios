const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.json({ message: 'pong'});
});

app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.json({ message: `Hello, ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if(parseInt(age) <= 17) {
    res.status(401).json({ message: 'Unauthorized'});
    return;
  }

  res.status(200).json({ message: `Hello, ${name}`});
});

app.put('users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade.` });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});