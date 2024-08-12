const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.getAllUsers)
router.post('/', UserController.createUser)
router.put('/:id', UserController.updateUser)
router.get('/:id', UserController.findUser)
router.delete('/', UserController.deleteUser)

module.exports = router
