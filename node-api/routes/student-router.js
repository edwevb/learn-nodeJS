const express = require('express')
const router = express.Router()
const {
  getStudents,
  findStudent,
  storeStudent,
  editStudent,
  destroyStudent,
} = require('../controllers/studentController')

router.get('/', (req, res) => {
  getStudents(res)
})

router.get('/:nim', (req, res) => {
  findStudent(res, req.params.nim)
})

router.post('/', (req, res) => {
  storeStudent(res, req.body)
})

router.put('/', (req, res) => {
  editStudent(res, req.body)
})

router.delete('/', (req, res) => {
  destroyStudent(res, req.body)
})

module.exports = router
