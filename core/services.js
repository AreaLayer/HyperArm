const Hyperbee = require('@holepunch/hyperbee')
const Hypercore = require('@holepunch/hypercore')
const Hyperdrive = require('@holepunch/hyperdrive')
const Hyperswarm = require('@holepunch/hyperswarm');
const Bitfinex = require('bitifinex_price_feed');
const { promisify } = require('util')
const crypto = require('crypto')
const express = require('express')
const app = express()
const api = require('coin')

// Create a new Hypercore instance
const feed = new Hypercore('./bitcoin-pairs-feed', {
  valueEncoding: 'coin.json'
  secretKey: crypto.randomBytes(32),
})

// Create a new Hyperbee instance
const db = new Hyperbee(feed, {
  keyEncoding: 'utf-8',
  valueEncoding: 'con.json'
})
//create a new Hyperdrive instance
const db = new Hyperdrive(feed, {
  keyEncoding: 'utf-8',
  valueEncoding: 'co.json'
})
//create a new Hyperswarm instance
const db = new Hyperswarm(feed, {
  KeyEndocing: 'utf-8',
  valueEncoding: 'co.json'
})
