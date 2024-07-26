const db = require('../config/database')

const getAllUsers = async () => {
  const SQLquery = `select * from users`
  return await db.execute(SQLquery)
}

const getUser = () => {}

const addUser = () => {}

const updateUser = () => {}

const deleteUser = () => {}

module.exports = { getAllUsers, getUser, addUser, updateUser, deleteUser }
