const pairs = [
  {
    id: 1,
    base: 'BTC',
    quote: 'USD',
    price: 50000,
  },
  {
    id: 2,
    base: 'BTC',
    quote: 'EUR',
    price: 40000,
  },
  {
    id: 3,
    base: 'BTC',
    quote: 'GBP',
    price: 30000,
  },
]

async function addPairsToDb() {
  for (const pair of pairs) {
    await db.put(pair.id.toString(), pair)
  }
}

addPairsToDb()
