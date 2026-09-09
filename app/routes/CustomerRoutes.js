const express = require('express')
const router = express.Router()

const CustomerController = require('../controllers/CustomerController')

module.exports = () => {
    //GET index
    router.get('/', CustomerController.index)
    //GET getOne
    router.get('/:id', CustomerController.get)
    //POST create
    router.post('/create', CustomerController.create)
    //PATCH update
    router.patch('/update', CustomerController.update)
    //DELETE delete
    router.delete('/delete', CustomerController.delete)

    return router
}