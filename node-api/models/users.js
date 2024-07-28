const db = require('../config/database')
const response = require('../utils/response')

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM tb_users'
  return db.execute(SQLQuery)
}

const finddUser = (res, querySQL) => {
  return db.query(querySQL, (err, fields) => {
    response(200, fields, 'Success', res)
  })
}

const storedUser = (res, querySQL) => {
  return db.query(querySQL, (err, fields) => {
    if (err) response(500, 'invalid', 'error', res)
    if (fields?.affectedRows) {
      const data = {
        isSuccess: true,
        id: fields.insertId,
      }
      response(200, data, 'Success', res)
    }
  })
}

const updatedUser = (res, querySQL) => {
  return db.query(querySQL, (err, fields) => {
    if (err) response(500, 'invalid', 'error', res)
    if (fields?.affectedRows) {
      const data = {
        isSuccess: true,
        message: fields.message,
      }
      response(200, data, 'Success', res)
    } else {
      response(404, 'invalid', '404 Not found', res)
    }
  })
}

const deletedUser = (res, querySQL) => {
  return db.query(querySQL, (err, fields) => {
    if (err) response(500, 'invalid', 'error', res)
    if (fields?.affectedRows) {
      const data = {
        isSuccess: true,
        message: fields.message,
      }
      response(200, data, 'Success', res)
    } else {
      response(404, 'invalid', '404 Not found', res)
    }
  })
}

module.exports = {
  getAllUsers,
  finddUser,
  storedUser,
  updatedUser,
  deletedUser,
}
