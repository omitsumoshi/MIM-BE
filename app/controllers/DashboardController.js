const IncidentsByCustomer = require('../dashboards/IncidentsByCustomer')
const IncidentsByStatus = require('../dashboards/IncidentsByStatus')
const Incident = require('../models/IncidentModel')

exports.byStatus = async (req, res, next) => {
    try {
        const results = await IncidentsByStatus()
        res.json(results)
    }
    catch (err) {
        next(err)
    }
}

exports.byCustomer = async (req, res, next) => {
    try {
        const results = await IncidentsByCustomer()
        res.json(results)
    }
    catch (err) {
        next(err)
    }
}

exports.IncidentsCount = async (req, res, next) => {
    try {
        const count = await Incident.countDocuments()
        res.json({ count })
    }
    catch (err) {
        next(err)
    }

}

exports.OpenIncidentCount = async (req, res, next) => {
    try {
        const count = await Incident.countDocuments({ status: 'open' })
        res.json({ count })
    }
    catch (err) {
        next(err)
    }
}

exports.UnresolvedIncidents = async (req, res, next) => {
    try {
        const count = await Incident.countDocuments((
            {status: { $in: ['open', 'assigned', 'pending']}}))
            res.json({count})
    }
    catch (err) {
        next(err)
    }
}
