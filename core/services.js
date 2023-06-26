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
const feed = new Hypercore('./bitcoin-pairs-feed',"bitfinex_price_feed' {
  valueEncoding: 'coin.json'
  refreshTime: '3 minutes'
  secretKey: crypto.randomBytes(32),
})

// Create a new Hyperbee instance
const db = new Hyperbee('./bitcoin-pairs-feed',"bitfinex_price_feed', {
  keyEncoding: 'utf-8',
  refreshTime: '3 minutes',
  valueEncoding: 'con.json'
})
//create a new Hyperdrive instance
const db = new Hyperdrive('./bitcoin-pairs-feed',"bitfinex_price_feed', {
  keyEncoding: 'utf-8',
    refreshTime: '3 minutes',
  valueEncoding: 'co.json'
})
//create a new Hyperswarm instance
const db = new Hyperswarm('./bitcoin-pairs-feed',"bitfinex_price_feed', {
  KeyEndocing: 'utf-8',
  refreshTime: '3 minutes',
  valueEncoding: 'co.json'
})
