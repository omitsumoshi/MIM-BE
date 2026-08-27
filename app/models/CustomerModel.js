const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tier: {
        type: Number,
        required: true
    },
    representative: {
        name: {
            type: String,
            required: true
        },
        contact: {
            type: Number,
            required: true
        }
    },
    location: {
        country: {
            type: String,
            required: true
        },
        zone: {
            type: String,
            required: true
        }
    }
}, {timestamps: true }
)

module.exports = mongoose.model('Customer', CustomerSchema)