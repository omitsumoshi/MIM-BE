const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IncidentSchema = new Schema({
    customer: {
        type: String,
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
        type: String,
        required: true
    }


}, { timestamps: true }
)

module.exports = mongoose.model('Incident', IncidentSchema)