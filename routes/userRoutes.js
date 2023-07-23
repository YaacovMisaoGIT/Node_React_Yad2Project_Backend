const express = require('express')
const router = express.Router()
const { getUsers, 
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    } = require('../controllers/userController')

router.route('/').get(getUsers).post(createUser)

router.route('/:id').get(getOneUser).delete(deleteUser).put(updateUser)

module.exports = router