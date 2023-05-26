const createError = require('http-errors')
const { readFileSync } = require('fs')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');

    if (!authHeader) {
        return next(createError(401))
    }

    const token = authHeader.split(' ')[1]
    const secret = readFileSync('./configurations/private.key')

    try {
        const decode = jwt.verify(token, secret)
        req._user_id = decode._id
        req._reviewer_id = decode._reviewer_id
        next()
    } catch (err) {
        return next(createError(401))
    }
}