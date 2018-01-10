import Ajv from 'ajv';
import Fs from 'fs';
import path from 'path';

const validator = {};
const schemaPath = path.join(__dirname, "../schema/user-1.0.json");

var schemaObj = JSON.parse(Fs.readFileSync(schemaPath, 'utf8'));
const ajvObj = new Ajv({"allErrors": true});

validator.validateUser = function (user, cb){
    var validate = ajvObj.compile(schemaObj);
    if (validate(user)){
        cb({status: true, errObj: null});
    } else {
        cb({status: false, errObj: validate.errors});
    }
}

module.exports = validator;