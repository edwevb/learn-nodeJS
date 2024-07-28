const db = require('../config/database')

const getAllUsers = async () => {
  const SQLquery = `select * from users`
  return await db.execute(SQLquery)
}

const getUser = (rows) => {}

const addUser = async () => {
  const SQLquery = `insert into users (name,username,email) values(?,?,?)`
  return await db.execute(SQLquery, rows)
}

const updateUser = () => {}

const deleteUser = () => {}

module.exports = { getAllUsers, getUser, addUser, updateUser, deleteUser }
