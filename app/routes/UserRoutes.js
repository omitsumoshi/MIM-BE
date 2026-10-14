const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

module.exports = () => {

    router.get('/', UserController.index )

    router.post('/create', UserController.create)

    router.patch('/update', UserController.update)

    router.delete('/delete', UserController.delete)

    router.post('/login', UserController.comparePasswords)

    return router
}