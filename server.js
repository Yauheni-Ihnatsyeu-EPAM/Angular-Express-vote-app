const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

var index = require('./routers/index');
var candidates = require('./routers/candidates');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.set('view engine', 'ejs');
app.engine('.html', require('ejs').renderFile);


app.use('/', index);
app.use('/candidates', candidates);


var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);



server.listen(port);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}