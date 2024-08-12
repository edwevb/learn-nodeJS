const UserModel = require('../models/User')
const response = require('../utils/response')

const login = async (req, res) => {
  res.send('login')
}
const register = async (req, res) => {
  console.log('ok')
  res.send('register')
}

const logout = async (req, res) => {
  res.send('logout')
}

module.exports = { register, login, logout }
