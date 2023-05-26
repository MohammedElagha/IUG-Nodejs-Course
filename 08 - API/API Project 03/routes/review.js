const {Router} = require('express')
const { reviewController } = require('../controllers')
const {auth} = require('../middlewares')

const router = Router()

router.post('/add', auth, reviewController.add)
    .delete('/delete/:id', auth, reviewController.remove)

module.exports = router