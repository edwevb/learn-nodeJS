const express = require('express')
const router = express.Router()
const Auth = require('../controllers/AuthController')

router.get('/login', Auth.login)
router.post('/register', Auth.register)
router.post('/logout', Auth.logout)

module.exports = router
