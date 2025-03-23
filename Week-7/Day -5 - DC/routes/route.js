const express = require('express')
const router = express.Router()

const { showAllUsers, showUserById, userRegister, userLogin, updateUserByID } = require('../controller.js')

router.get('/users', showAllUsers)
router.get('/users/:id', showUserById)
router.post('/register', userRegister)
router.post('/login', userLogin)
router.put('/users/:id', updateUserByID)



module.exports = router