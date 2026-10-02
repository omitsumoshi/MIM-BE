const express = require('express')
const router = express.Router()
const DashboardController = require('../controllers/DashboardController')

module.exports = () => {
    router.get('/incidents-by-status', DashboardController.byStatus)
    router.get('/incidents-by-customer', DashboardController.byCustomer)

    return router
}