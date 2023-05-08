const Hyperbee = require('hyperbee')
const Hypercore = require('hypercore')
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
