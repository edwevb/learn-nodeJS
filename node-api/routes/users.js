const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')

router.get('/', UserController.getAllUsers)
router.post('/', UserController.createUser)
router.get('/:nip', UserController.getUser)
router.put('/:nip', UserController.updateUser)
router.delete('/:nip', UserController.deleteUser)

module.exports = router
