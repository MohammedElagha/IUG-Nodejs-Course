const express = require('express')

const middleware = require('./middlewares')
const routes = require('./routes')

const app = express();


/**
 * Middlewares
 */
middleware(app);


/**
 * Routes
 */
routes(app)


module.exports = app