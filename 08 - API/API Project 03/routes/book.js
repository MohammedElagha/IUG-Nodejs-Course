const { Router } = require('express')
const { bookController } = require('../controllers')
const { auth } = require('../middlewares')

const router = Router()

router
    .get('/', auth, bookController.getBooks)
    .get('/pages-count', bookController.getBooksPagesCount)
    .get('/:id', bookController.getOneBook);

module.exports = router