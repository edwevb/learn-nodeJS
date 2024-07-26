const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers)
router.post('/', userController.createUser)
router.get('/:nim', userController.findUser)
router.put('/:nim', userController.updateUser)
router.delete('/:nim', userController.deleteUser)

module.exports = router
