const { Student } = require('../models/model-student')

const getAllStudents = (req, res) => {
  const data = {
    nama: 'edward',
    nip: 12345678,
    email: 'edward@gmail.com',
  }
  res.json({
    data: data,
  })

  console.log(data)
  // const query = 'SELECT * FROM students'
  // return getAllStudents(res, query)
}

const createStudent = (req, res) => {
  console.log(req.body)
  res.json({
    message: 'Create student',
    data: req.body,
  })
  // const { nim, nama, kelas, alamat } = req
  // const query = `INSERT INTO students (nim,nama,kelas,alamat) VALUES (${nim},'${nama}','${kelas}','${alamat}')`
  // addStudent(res, query)
}

const getStudent = (req, res) => {
  console.log(req.params)
  res.json({
    message: 'Get student',
    data: req.params,
  })
  // const query = `SELECT * FROM students WHERE nim = ${nim}`
  // return getStudent(res, query)
}

const updateStudent = (req, res) => {
  console.log(req.params)
  res.json({
    message: 'Update student',
    data: req.body,
  })
  // const { nim, nama, kelas, alamat } = req
  // const query = `UPDATE students SET nama = '${nama}', kelas = '${kelas}', alamat = '${alamat}' WHERE nim = '${nim}'`
  // updateStudent(res, query)
}
const deleteStudent = (req, res) => {
  console.log(req.params)
  res.json({
    message: 'Delete student',
    data: req.params,
  })
  // const query = `DELETE FROM students WHERE nim = '${req.nim}'`
  // deleteStudent(res, query)
}

module.exports = {
  getAllStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
}
