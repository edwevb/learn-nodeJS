const {
  getAllStudents,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} = require('../models/model-student')

const getStudents = (res) => {
  const query = 'SELECT * FROM students'
  return getAllStudents(res, query)
}

const findStudent = (res, nim) => {
  const query = `SELECT * FROM students WHERE nim = ${nim}`
  return getStudent(res, query)
}

const storeStudent = (res, req) => {
  const { nim, nama, kelas, alamat } = req
  const query = `INSERT INTO students (nim,nama,kelas,alamat) VALUES (${nim},'${nama}','${kelas}','${alamat}')`
  addStudent(res, query)
}
const editStudent = (res, req) => {
  const { nim, nama, kelas, alamat } = req
  const query = `UPDATE students SET nama = '${nama}', kelas = '${kelas}', alamat = '${alamat}' WHERE nim = '${nim}'`
  updateStudent(res, query)
}
const destroyStudent = (res, req) => {
  const query = `DELETE FROM students WHERE nim = '${req.nim}'`
  deleteStudent(res, query)
}

module.exports = {
  getStudents,
  findStudent,
  storeStudent,
  editStudent,
  destroyStudent,
}
