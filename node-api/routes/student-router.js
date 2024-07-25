const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')

router.get('/', studentController.getAllStudents)

router.post('/', studentController.createStudent)

router.get('/:nim', studentController.getStudent)

router.put('/:nim', studentController.updateStudent)

router.delete('/:nim', studentController.deleteStudent)

module.exports = router
