const { User } = require('../models')
const createError = require('http-errors')

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


}

module.exports = {
    signup
}