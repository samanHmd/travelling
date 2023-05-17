const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String , require: true },
    surName: { type: String , require: true },
    userName: { type: String , require: true },
    email: { type: String , require: true },
    password: { type: String , require: true },
    packages: [{ type: Schema.Types.ObjectId, ref: 'Package' }]
});

module.exports = mongoose.model('User', userSchema);
