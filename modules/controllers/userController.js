const controller = require(`${config.path.controller.api}/controller`);

module.exports = new class userController extends controller{
    index (req, res){
        console.log(this);
        res.status(200).json('userController')
    }
};
