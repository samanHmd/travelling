const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const agentSchema = new Schema({
    name: { type: String , require: true },
    surName: { type: String , require: true },
    userName: { type: String , require: true },
    email: { type: String , require: true },
    password: { type: String , require: true },
});

module.exports = mongoose.model('Agent', agentSchema);
