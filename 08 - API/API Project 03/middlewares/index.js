const express = require('express')

module.exports = (app) => {
    app.use((req, res, next) => {
        next();
    })

    app.use(express.json());
}