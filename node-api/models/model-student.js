const db = require('../database/connection')
const response = require('../utils/response')

const getAllStudents = (res, querySQL) => {
  return db.query(querySQL, (err, fields) => {
    response(200, fields[0], 'Success', res)
  })
}

const getStudent = (res, querySQL) => {
  return db.query(querySQL, (err, fields) => {
    response(200, fields, 'Success', res)
  })
}

const addStudent = (res, querySQL) => {
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

const updateStudent = (res, querySQL) => {
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

const deleteStudent = (res, querySQL) => {
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
  getAllStudents,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
}
