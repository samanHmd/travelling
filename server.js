const app = require('express')();
const bodyParser = require('body-parser');
global.config = require('./modules/config');
const mongoose = require('mongoose');

//connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/travel', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

/*const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: { type: String, require: true }
});
const userModel = mongoose.model('User', UserSchema);
new userModel({
    name: "john malkovich"
})
    .save()
    .then(() => {
        console.log('User saved successfully');
    })
    .catch(err => {
        throw err;
    });*/

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json({ type: 'application/json' }));

const apiRouth = require('./modules/routes/api/index');

app.use('/api', apiRouth);

app.listen(config.port, () => {
    console.log(`server is running at port ${config.port}`)
});
