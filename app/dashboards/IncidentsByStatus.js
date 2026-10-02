const Incident = require('../models/IncidentModel');

const IncidentsByStatus = () => {
   return Incident.aggregate(
        [
            {
                $match: {
                    "status": { $exists: true, $ne: null }
                }
            },
            {
                $unwind: "$status"
            },
            {
                $group: {
                    _id: "$status",
                    incidentCount: {
                        $sum: 1
                    }
                }
            },
            {
                $limit: 4
            }
        ]
    )
}

module.exports = IncidentsByStatus