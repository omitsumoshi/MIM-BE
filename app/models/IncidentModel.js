const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IncidentSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zone: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    services: {
        type: String,
        required: true
    },
    teams: {
        type: String,
        required: true
    },
    controller: {
        type: String,
        required: true
    },
    rootCause: String,
    
    status: {
        type: String, default: 'open'
    }


}, { timestamps: true }
)

module.exports = mongoose.model('Incident', IncidentSchema)