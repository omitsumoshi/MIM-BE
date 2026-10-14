const express = require('express')
const router = express.Router()
const TeamsController = require('../controllers/TeamsController')

module.exports = () => {
// GET/index
router.get('/', TeamsController.index)
// GET one/index
router.get('/:id', TeamsController.get)
// POST/CREATE
router.post('/create', TeamsController.create)
// PATCH/update
router.patch('update/:id', TeamsController.update)
// DELETE/delete
router.delete('/delete', TeamsController.delete)


    return router
}