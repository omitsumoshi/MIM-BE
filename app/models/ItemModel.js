//Location iteam
const mongoose = require('mongoose');
const locationSchema = require('./location.schema');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },

  location: {
    type: locationSchema,
    required: [true, 'Location is required'],
  },
}, { timestamps: true });

itemSchema.index({ 'location.zone': 1, 'location.country': 1 });

module.exports = mongoose.model('Item', itemSchema);