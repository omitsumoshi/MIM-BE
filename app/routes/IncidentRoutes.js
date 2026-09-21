const express = require('express')
const router = express.Router()
const IncidentController = require('../controllers/IncidentController')

module.exports = () => {
// GET/index
router.get('/', IncidentController.index)
// GET one/index
router.get('/:id', IncidentController.get)
// POST/CREATE
router.post('/create', IncidentController.create)
// PATCH/update
router.patch('/update/:id', IncidentController.update)
// DELETE/delete
router.delete('/delete', IncidentController.delete)


    return router
}