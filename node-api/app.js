require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const routesApi = require('./routes/UserRoutes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/user', routesApi)

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
