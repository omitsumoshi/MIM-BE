const Incident = require('../models/IncidentModel');

const IncidentsByCustomer = () => {
   return Incident.aggregate(
        [
            {
                $match: {
                    "customer": { $exists: true, $ne: null }
                }
            },
            {
                $unwind: "$customer"
            },
            {
                $group: {
                    _id: "$customer",
                    incidentCount: {
                        $sum: 1
                    }
                }
            },
            {
                $limit: 10
            }
        ]
    )
}

module.exports = IncidentsByCustomer