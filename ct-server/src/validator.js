import Ajv from 'ajv';
import Fs from 'fs';
const validator = {};

var schemaObj = JSON.parse(Fs.readFileSync('/home/vilakshan/work/commercial-touch/ct-server/schema/user-1.0.json', 'utf8'));
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