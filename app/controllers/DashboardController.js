const IncidentsByCustomer = require('../dashboards/IncidentsByCustomer')
const IncidentsByStatus = require('../dashboards/IncidentsByStatus')

exports.byStatus = async (req, res, next) => {
    try {
        const results = await IncidentsByStatus()
        res.json(results)
    }
    catch(err) {
        next(err)
    }
}

exports.byCustomer = async (req, res, next) => {
    try {
    const results = await IncidentsByCustomer()
    res.json(results)
    }
    catch(err) {
        next(err)
    }
}