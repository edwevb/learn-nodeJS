require('dotenv').config()
const express = require('express')
const app = express()
const createError = require('http-errors')
const PORT = process.env.PORT || 3000
const UserRouter = require('./routes/UserRouter')
const AuthRouter = require('./routes/Auth')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/assets', express.static('public'))
app.use('/auth', AuthRouter)
app.use('/users', UserRouter)

app.get('/', (req, res) => {
  res.json({
    status: 200,
    msg: 'ok',
  })
  res.end()
})

app.use(async (req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
    },
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
