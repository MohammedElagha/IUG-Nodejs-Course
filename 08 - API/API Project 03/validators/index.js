const userValidator = require('./user')

module.exports = {
    userValidator: userValidator.schema,
    loginValidator: userValidator.loginSchema
}