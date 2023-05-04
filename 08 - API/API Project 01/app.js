const express = require('express')

const app = express();


/**
 * Middlewares
 */
app.use((req, res, next) => {
    console.log(req.ip);
    next();
})


/**
 * Routes
 */

// route
app.get('/', (req, res, next) => {
    // res.status(200).send('Welcome to the home page')

    res.status(200).json({
        message: "Welcome to the home"
    });
})

// redirect
app.get('/home', (req, res, next) => {
    res.redirect('/')
})

// path param
app.get('/user/:id', (req, res, next) => {
    console.log(req.params);
    res.send("Welcome to user page")
})

// path, get, header
app.get('/user/:id/post/:postId', (req, res, next) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.query.timezone);
    console.log(req.get('Host'))
    res.send("Welcome to post page")
})

module.exports = app