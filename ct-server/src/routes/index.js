module.exports = function (log, repository) {

    var express = require('express');
    var router = express.Router();

    //The Controller and their methods are defined for all the Server Api calls
    var userCtrl = require('../httpModules/userCtrl.js')(log, repository);

    router.post('/oapi/v1/createUser', userCtrl.createUser);
    router.post('/oapi/v1/updateUser', userCtrl.updateUser);
    router.post('/oapi/v1/login', userCtrl.getUser);

    // router.get('/oapi/v1/user/:userType', userCtrl.getUsers);

    return router;
}
