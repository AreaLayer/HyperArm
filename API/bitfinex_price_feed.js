const = require('apiPath');

function getExchangeRate() {
    const apiPath = 'v2/auth/r/orders/tBTCUSD/hist' // or 'v2/auth/r/orders/hist'
fetch(`https://api.bitfinex.com/${apiPath}`, {
  method:'POST',
  body: JSON.stringify({}),
  headers: {
    /* auth headers */
  }
})
.then(res => res.json())
.then(json => console.log(json))

      const btcToUsdtRate = 35000; // Dummy value, replace with actual exchange rate

      return btcToUsdtRate;
    }
