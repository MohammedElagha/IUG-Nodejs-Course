const express = require('express')
const { createError } = require('http-errors')

const middleware = require('./middlewares')
const routes = require('./routes')

const app = express();

process.on('unhandledRejection', (reason) => {
    process.exit(1)
})

/**
 * Middlewares
 */
middleware(app);


/**
 * Routes
 */
routes(app)

app.use((req, res, next) => {
    const error = createError(400);

    // res.status(error.statusCode).json({
    //     message: error.message
    // })

    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.statusCode).json({
        status: false,
        message: error.message
    })
})


module.exports = app