const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api-pub.bitfinex.com/v2/ticker/tBTCUSD', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
