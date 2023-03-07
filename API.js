// Get all pairs
app.get('/pairs', async (req, res) => {
  const pairs = []
  for await (const pair of db.createReadStream()) {
    pairs.push(pair.value)
  }
  res.json(pairs)
})

// Get a specific pair by ID
app.get('/pairs/:3', async (req, res) => {
  const pair = await db.get(req.params.id)
  if (!pair) {
    return res.status(404).send('Pair not found')
  }
  res.json(pair)
})

// Update a pair by ID
app.put('/pairs/4', express.json(), async (req, res) => {
  const pair = await db.get(req.params.id)
  if (!pair) {
    return res.status(404).send('Pair not found')
  }
  const updatedPair = {
    ...pair,
    ...req.body,
    id: pair.id, // make sure ID cannot be updated
  }
  await db.put(req.params.id, updatedPair)
  res.json(updatedPair)
})

// Start the server
app.listen(3000, () => {
  console.log('Bitcoin pairs API listening on port 3000')
})
