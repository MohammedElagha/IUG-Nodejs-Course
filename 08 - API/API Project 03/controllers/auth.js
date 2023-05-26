const { User, Reviewer } = require('../models')
const createError = require('http-errors')
const jwt = require('jsonwebtoken')
const {readFileSync} = require('fs')

const signup = (req, res, next) => {
    const userData = req.body;

    // validation
    const validation = User.validate(userData)
    if (validation.error) {
        const error = createError(400, validation.error.message)
        next(error)
    }

    // check existance
    const user = new User(userData);
    user.isExist()
        .then(result => {
            if (result.check) {
                next(createError(409, result.message))
            }
        })
        .catch(err => {
            next(createError(500, err.message))
        })

    // insert user
    user.save((status) => {
        if (status.status) {
            const reviewer = new Reviewer({
                _user_id: status._user_id,
                name: user.userData.name
            })

            reviewer.save((status) => {
                if (status.status) {
                    res.status(201).json({
                        status: true,
                        message: "User has been created successfully"
                    })
                } else {
                    next(createError(500, status.message))
                }
            })
        } else {
            next(createError(500, status.message))
        }
    });
}


const login = (req, res, next) => {
    User.login(req.body)
        .then(result => {
            if (result instanceof Error) {
                next(createError(result.statusCode, result.message))
            }

            // token
            const secretKey = readFileSync('./configurations/private.key')
            const token = jwt.sign(
                {
                    _id: result._id,
                    _reviewer_id: result.reviewer._id
                }, secretKey
            )

            res.status(200).json({
                status: true,
                token: token
            })
        })
        .catch(err => {
            next(createError(err.statusCode, err.message))
        })
}

module.exports = {
    signup, login
}