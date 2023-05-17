const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
    desCity: { type: String , require: true },
    desCountry: { type: String , require: true },
    numOfDays: { type: Number , require: true },
    numOfNights: { type: Number , require: true },
    hotelName: { type: String , require: true },
    price: { type: Number , require: true },
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Package', packageSchema);
