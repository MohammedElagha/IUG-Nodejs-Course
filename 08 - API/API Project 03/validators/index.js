const userValidator = require('./user')
const reviewValidator = require('./review')

module.exports = {
    userValidator: userValidator.schema,
    loginValidator: userValidator.loginSchema,
    reviewValidator
}