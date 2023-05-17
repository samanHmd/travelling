const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    userId: { type: String , require: true },
    packagesId: { type: String , require: true },
    departureDate: { type: Number , require: true },
});

module.exports = mongoose.model('Booking', bookingSchema);
