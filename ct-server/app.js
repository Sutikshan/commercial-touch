module.exports = function (log, repository) {
    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');

    // Log requests to the console.
    app.use(log('dev'));
    app.use(bodyParser.json());
    app.all('*', function (req, res, next) {
        // CORS headers
        res.header("Access-Control-Allow-Origin", "*"); // TODO restrict it to the required domain
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        // Set custom headers for CORS
        res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
        if (req.method == 'OPTIONS') {
            res
                .status(200)
                .end();
        } else {
            next();
        }
    });

    app.use('/', require('./src/routes')(log, repository));

    // If no route is matched by now, it must be a 404
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // Start the server
    app.set('port', 8000);

    return app;

}
