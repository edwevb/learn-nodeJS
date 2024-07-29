const mysql = require('mysql2/promise')

// Create the connection to database
console.log('DB Connected..')

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || '',
  port: process.env.DB_PORT || '',
})

module.exports = db
