module.exports = function (log, repository) {
    const ObjectID = require('mongodb').ObjectID;    
    let validator = require("../validator.js");
    var userDataService = require("../dataModules/userData.js")(log, repository);
    const userCtrl = {};

    userCtrl.getUser = function (req, res) {
        const userObj = req.body;
        if(userObj.password && (userObj.email || (userObj.countryCode && userObj.mobile))){
            userDataService.getUser(userObj, (result) => {
                if(result){
                    // verify password before sending response.
                    if(result.body.password === userObj.password){
                        res
                            .status(200)
                            .send({message: "User Found..!!", user: result});
                    } else {
                        res
                            .status(403) // 403 - forbidden
                            .send({message: "Invalid Password..!!", error: null});                    
                    }
                } else {
                    res
                        .status(404) // 404 - Not Found
                        .send({message: "Invalid Username ..!!", error: null});   
                }                    
            });
        } else {
            res
                .status(400) // 400 - Bad Request
                .send({message: "Insufficient Data ..!!", error: null});
        }
    }

    userCtrl.getUsers = function (req, res) {
        
    }    

    userCtrl.createUser = function (req, res) {
        const newUserObj = req.body;
        if(newUserObj.body.userType === 1){
            res
                .status(400) // 400 - Bad Request
                .send({
                    message: "Super User can not be created..!!",
                    error: null
                });
        } else {
            validator.validateUser(newUserObj, ({status, errObj}) => {
                if (status) {
                    userDataService.checkIfUserExist(newUserObj, (result) => {
                        if(result){
                            res
                                .status(400)
                                .send({message: "User already exist..!!", error: null});
                        } else {
                            userDataService.createUser(newUserObj, (dbResp) => {
                                res
                                    .status(201)
                                    .send({message: "User created..!!", newUser: dbResp.ops[0], error: null});                                                    
                            });
                        }                    
                    });
                } else {
                    res
                        .status(400)
                        .send({
                            message: "Invalid user data. User NOT created..!!",
                            error: errObj
                        });     
                }
            });
        }
    }
    
    userCtrl.updateUser = function (req, res) {
        const userObj = req.body;
        userObj._id = ObjectID(userObj._id);        
        validator.validateUser(userObj, ({status, errObj}) => {
            if (status) {
                userDataService.updateUser(userObj, (dbResp) => {
                    if(dbResp.matchedCount){
                        //dbResp.matchedCount === 0 indicates there was no match found.
                        console.log("match found..!!");
                    }                  
                    res
                        .status(200)
                        .send({message: "User updated..!!", error: null});                                                    
                });
            } else {
                res
                    .status(400)
                    .send({
                        message: "Invalid user data. User NOT created..!!",
                        error: errObj
                    });     
            }
        });
    }    

    return userCtrl;
}