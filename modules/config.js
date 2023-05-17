const path = require('path');

module.exports = {
    port: 8000,
    path: {
        controller: {
            api: path.resolve('./modules/controllers')
        },
        models: {
            modelPath: path.resolve('./modules/models')
        }
    }
};
