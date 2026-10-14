const Incident = require('../models/IncidentModel');
const Customer = require('../models/CustomerModel')

const IncidentsByCustomer = () => {
   return Incident.aggregate(
        [
            {$set: {
             customer: { $toObjectId: "$customer" }
            }
            },
            {
                $match: {
                    "customer": { $exists: true, $ne: null }
                }
            },
            {
                $lookup: {
                    from: "customers",
                    localField: "customer",
                    foreignField: "_id",
                    as: "customer",
                }
            },
            {
                $group: {
                    _id: "$customer.name",
                    incidentCount: {
                        $sum: 1
                    },
                }
            },
            
            {
                $limit: 10
            },
        ]
    )
}

module.exports = IncidentsByCustomer