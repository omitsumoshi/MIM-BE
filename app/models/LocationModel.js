const mongoose = require('mongoose')
const { ZONE_CODES, ALL_COUNTRY_CODES, ZONES, isValidPair } = require('../data/zones')

const Schema = mongoose.Schema

const locationSchema = new Schema({
  zone: {
    type: String,
    required: [true, 'Strefa jest wymagana'],
    uppercase: true,
    trim: true,
    enum: { values: ZONE_CODES, message: 'Unknown zone: {VALUE}' },
  },
  country: {
    type: String,
    required: [true, 'Kraj jest wymagany'],
    uppercase: true,
    trim: true,
    enum: { values: ALL_COUNTRY_CODES, message: 'Unknown country: {VALUE}' },
  },
}, { _id: false });

// walidacja krzyżowa — tutaj `this` to zawsze sam subdokument????????
locationSchema.pre('validate', function (next) {
  if (this.zone && this.country && !isValidPair(this.zone, this.country)) {
    this.invalidate(
      'country',
      `Country ${this.country} does not belong to zone ${ZONES[this.zone].name}`,
      this.country
    );
  }
  next();
});

module.exports = locationSchema;