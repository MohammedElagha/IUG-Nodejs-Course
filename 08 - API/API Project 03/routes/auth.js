const { Router } = require('express')
const { authController } = require('../controllers')


const router = Router()

router.post('/signup', authController.signup)
    .post('/login', authController.login);

module.exports = router;