const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TeamsSchema = new Schema({

    name: { type: String, required: true, trim: true },
    services: { type: [String], required: true },
    teamLead : { type: String, required: true },
    members: { type: [String], required: true }


})

module.exports = mongoose.model('Teams', TeamsSchema)