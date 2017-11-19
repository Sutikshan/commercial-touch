module.exports = function (log, db) {
    const util = require('util');
    const userDataCtrl = {};

    userDataCtrl.getUser = function (userObj, cb) {
        db
            .collection("users")
            .findOne({
                $or: [
                    {
                        "body.email": userObj.email
                    }, {
                        "body.countryCode": userObj.countryCode,
                        "body.mobile": userObj.mobile
                    }
                ]                
            }, function (err, dbResp) {
                if (err) 
                    throw err;
                console.log(dbResp);
                cb(dbResp);

            });
    }

    userDataCtrl.createUser = function (newUserObj, cb) {
        db
            .collection("users")
            .insertOne(newUserObj, function (err, dbResp) {
                if (err) 
                    throw err;
                console.log(util.inspect(dbResp.ops[0]));
                cb(dbResp);

            });
    }

    userDataCtrl.updateUser = function (userObj, cb) {
        db
            .collection("users")
            .updateOne({
                "_id": userObj._id
            }, userObj, function (err, dbResp) {
                console.log(util.inspect(dbResp));
                if (err) 
                    throw err;
                cb(dbResp);
            });
    }

    userDataCtrl.checkIfUserExist = function (userObj, cb) {
        console.log(userObj.body.email + " = " + userObj.body.countryCode + " = " + userObj.body.mobile);
        db
            .collection("users")
            .findOne({
                $or: [
                    {
                        "body.email": userObj.body.email
                    }, {
                        "body.countryCode": userObj.body.countryCode,
                        "body.mobile": userObj.body.mobile
                    }
                ]
            }, function (err, result) {
                console.log(result)
                if (err) 
                    throw err;
                cb(result);
            });
    }

    return userDataCtrl;
}