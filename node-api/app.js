require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const userRouter = require('./routes/userRouter')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/assets', express.static('public'))

app.use('/users', userRouter)

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
