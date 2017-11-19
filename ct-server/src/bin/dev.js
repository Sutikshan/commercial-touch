// This will be application entry.
const env = 'development';
process.env.NODE_ENV = env;
import logger from 'morgan';



var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function (err, repository) {
  if (err) {
    console.log("Not Connected to db. " + err);
  } else {
    console.log("Connected correctly to db.");
    const app = require('../../app.js')(logger, repository);
    const devserver = app.listen(app.get('port'), function () {
      console.log('Express server listening on port ' + devserver.address().port);
    });
  }
});