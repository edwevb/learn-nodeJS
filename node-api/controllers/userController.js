const UserModel = require('../models/users')
const response = require('../utils/response')

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UserModel.getAllUsers()
    const messages = 'Fetch Data Successfully'
    response(200, data, messages, res)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Internal Server Error',
      serverMessage: error,
    })
  }
}

const createUser = (req, res) => {
  console.log(req.body)
  res.json({
    message: 'Create User',
    data: req.body,
  })
  // const { nim, nama, kelas, alamat } = req
  // const query = `INSERT INTO Users(nim,nama,kelas,alamat) VALUES (${nim},'${nama}','${kelas}','${alamat}')`
  // addUser(res, query)
}

const getUser = (req, res) => {
  console.log(req.params)
  res.json({
    message: 'Get User',
    data: req.params,
  })
  // const query = `SELECT * FROM UsersWHERE nim = ${nim}`
  // return getUser(res, query)
}

const updateUser = (req, res) => {
  console.log(req.params)
  res.json({
    message: 'Update User',
    data: req.body,
  })
  // const { nim, nama, kelas, alamat } = req
  // const query = `UPDATE UsersSET nama = '${nama}', kelas = '${kelas}', alamat = '${alamat}' WHERE nim = '${nim}'`
  // updateUser(res, query)
}
const deleteUser = (req, res) => {
  console.log(req.params)
  res.json({
    message: 'Delete User',
    data: req.params,
  })
  // const query = `DELETE FROM UsersWHERE nim = '${req.nim}'`
  // deleteUser(res, query)
}

module.exports = {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
}
