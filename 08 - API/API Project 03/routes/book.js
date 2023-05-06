const { Router } = require('express')
const { bookController } = require('../controllers')

const router = Router()

router
    .get('/', bookController.getBooks)
    .get('/pages-count', bookController.getBooksPagesCount)
    .get('/:id', bookController.getOneBook);

module.exports = router