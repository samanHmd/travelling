const packages = require(`${config.path.models.modelPath}/package`);
const agent = require(`${config.path.models.modelPath}/agent`);
const booking = require(`${config.path.models.modelPath}/booking`);
const user = require(`${config.path.models.modelPath}/user`);

module.exports = class controller {
    constructor(){
        this.model = { packages, agent, booking, user }
    }
};
