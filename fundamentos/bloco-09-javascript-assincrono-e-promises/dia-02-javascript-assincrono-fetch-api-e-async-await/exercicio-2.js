const fetch = require('node-fetch');

const fetchCryptos = async () => {
  const url = 'https://api.coincap.io/v2/assets'

  const cryptos = await fetch(url)
  .then(response => response.json)
  .then(data => data.data)
  .catch((error) => error.toString());
}

const getCoins = async() => {
  const coins = await fetchCryptos();
  const list = document.getElementById('list-cryptos');
  coins.forEach(coin => {
    const newCoin = document.createElement('li');
    
    newCoin.innerText = `${coin.name} (${coin.symbol}) - ${coin.priceUsd.toFixed(2)}`;
    list.appendChild(newCoin);
  });
}

window.onload = () => getCoins();