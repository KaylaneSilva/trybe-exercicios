const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke();


// refaatoramento do código acima:

// Primeira forma:
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';
  const result = await fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data.value))
  .catch((error) => console.log(`Algo deu errado :( \n${error}`));

return result;
}

//Segunda forma;
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.


fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.