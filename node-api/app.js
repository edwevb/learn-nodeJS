const express = require('express')
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')
const studentRouter = require('./routes/student-router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/student', studentRouter)

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
