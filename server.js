
const express = require('express');
var bodyParser = require('body-parser');
const errorHandler = require('./src/middleware/error-handler');
const cors = require('cors');
const cookieParser = require('cookie-parser');
var app = express();
var routes = require('./src/routes/MainRoute');

require('dotenv').config();

// Habilitando CORS para las peticiones locales
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json(
    {limit:'50mb'}
));
app.use(cookieParser());

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

app.use('/api', routes);

// swagger docs route
app.use('/api-docs', require('./src/helpers/swagger'));

// global error handler
app.use(errorHandler);

/*Server Config*/
const server = require('http').createServer(app);
const port = normalizePort(process.env.PORT || '8001');
server.listen(port, function () {
    console.log(`Smart listening on port ${port}!`);
});

/*Normalize Port*/
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

// Exportar la variable 'app' que contiene express para poder usarla-requerirla en otros ficheros
module.exports = server;
