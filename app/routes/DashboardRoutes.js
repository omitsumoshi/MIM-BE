const express = require('express')
const router = express.Router()
const DashboardController = require('../controllers/DashboardController')

module.exports = () => {
    router.get('/incidents-by-status', DashboardController.byStatus)
    router.get('/incidents-by-customer', DashboardController.byCustomer)
    router.get('/incidents-count', DashboardController.IncidentsCount)
    router.get('/open-incidents-count', DashboardController.OpenIncidentCount)
    router.get('/currently-unresolved', DashboardController.UnresolvedIncidents)

    return router
}