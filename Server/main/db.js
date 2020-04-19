const { Pool } = require('pg')

const pool = new Pool({
  user: 'devanshchopra',
  host: 'localhost',
  database: 'fullstackblog',
  password: 'password',
  post: 5432
})

module.exports = pool
