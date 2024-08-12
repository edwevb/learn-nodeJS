const UserModel = require('../models/User')
const response = require('../utils/response')

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UserModel.getAllUsers()
    response.success(200, data, 'Get Data Successfully', res)
  } catch (error) {
    response.failed(500, error, 'Field to get data', res)
    console.log(error)
  }
}

const createUser = (req, res) => {
  console.log('Create User')
}

const updateUser = (req, res) => {
  console.log('Update User')
}

const findUser = (req, res) => {
  console.log('Find User')
}
const deleteUser = (req, res) => {
  console.log('Delete User')
}

module.exports = { getAllUsers, createUser, updateUser, findUser, deleteUser }
