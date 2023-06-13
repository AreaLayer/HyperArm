const axios = require('axios') // Axios library for Node

const baseUrl = "https://api-pub.bitfinex.com/v2/"; // Domain
const pathParams = "tickers" // Change based on relevant path params listed in the documentation
const queryParams = "symbols=fUSD,tBTCUSD" // Change based on relevant query params listed in the documentation

axios.get(`${baseUrl}/${pathParams}?${queryParams}`)
    .then(response => {
        console.log(response.data); // Logs response data
    }, error => {
        console.log(error); // Catches and logs any error
    })

