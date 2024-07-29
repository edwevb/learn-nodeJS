const UserModel = require('../models/users')
const response = require('../utils/response')
const fs = require('fs')

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UserModel.getAllUsers()
    response.success(200, data, 'Get Data Successfully', res)
  } catch (error) {
    response.failed(500, error, 'Failed to get data', res)
    console.log(error)
  }
}

const createUser = async (req, res) => {
  // const read = fs.readFileSync('./config/users.json')
  // const data = await JSON.parse(read)
  // data.forEach((element) => {
  //   UserModel.addUser([element.name, element.username, element.email])
  // })
  const { body } = req
  try {
    const [data] = await UserModel.addUser(body)
    response.success(201, body, 'Data Successfully Created', res)
  } catch (error) {
    response.failed(500, error, 'Failed to create data', res)
    console.log(error)
  }
  console.log('Create User')
}

const updateUser = async (req, res) => {
  const { body } = req
  try {
    const fields = await UserModel.updateUser(body, req.params.id)
    if (!fields[0].affectedRows) {
      response.failed(404, 'error', 'Data Not Found!', res)
    } else {
      data = {
        id: req.params.id,
        ...body,
      }
      response.success(201, data, 'Data Successfully Updated', res)
    }
  } catch (error) {
    response.failed(500, error, 'Failed to update data', res)
    console.log(error)
  }
  console.log('Update User')
}

const findUser = async (req, res) => {
  try {
    const [data] = await UserModel.findUser(req.params.id)
    if (data.length === 0) {
      response.failed(404, 'error', 'Data Not Found', res)
    } else {
      response.success(200, data, 'Get Data Successfully', res)
    }
  } catch (error) {
    response.failed(500, error, 'Failed to get data', res)
  }
}

const deleteUser = async (req, res) => {
  try {
    const data = await UserModel.deleteUser([req.body.id])
    if (!data[0].affectedRows) {
      response.failed(404, 'error', 'Data Not Found!', res)
    } else {
      response.success(200, null, 'Data Successfully Deleted', res)
    }
  } catch (error) {
    response.failed(500, error, 'Failed to delete data', res)
    console.log(error)
  }
  console.log('Delete User')
}

module.exports = { getAllUsers, createUser, updateUser, findUser, deleteUser }
