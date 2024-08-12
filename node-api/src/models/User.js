const db = require('../config/database')

const getAllUsers = async () => {
  const SQLquery = `select * from users`
  return await db.execute(SQLquery)
}

const addUser = async (body) => {
  const rows = [body.name, body.username, body.email]
  const SQLquery = `insert into users (name,username,email) values(?,?,?)`
  return await db.execute(SQLquery, rows)
}

const findUser = async (id) => {
  const SQLquery = `select * from users where id=${id}`
  return await db.execute(SQLquery)
}

const updateUser = async (body, id) => {
  const rows = [...Object.values(body), id]
  const SQLquery = `update users set name=?,username=?,email=? where id=?`
  return await db.execute(SQLquery, rows)
}

const deleteUser = async (id) => {
  const SQLquery = `delete from users where id=?`
  return await db.execute(SQLquery, id)
}

module.exports = { getAllUsers, findUser, addUser, updateUser, deleteUser }
