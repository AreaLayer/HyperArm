const pairs = [
  {
    id: 1,
    base: 'BTC',
    quote: 'USD',
    price: 22436,
  },
  {
    id: 2,
    base: 'BTC',
    quote: 'EUR',
    price: 21000,
  },
  {
    id: 3,
    base: 'BTC',
    quote: 'GBP',
    price: 18332,
  },
  {
    id: 4
    base: 'BTC'
    quote: 'BRL'
    price: 100000,
  }
  ],

async function addPairsToDb() {
  for (const pair of pairs) {
    await db.put(pair.id.toString(), pair)
  }
}

addPairsToDb()

const bitifinex_price_feed
