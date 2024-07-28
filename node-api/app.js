require('dotenv').config()
const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const UserRoutes = require('./routes/users')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/users', UserRoutes)

app.get('/', (req, res) => {
  res.json({
    status: 200,
    msg: 'ok',
  })
  res.end()
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
