const bookRouter = require('./book')

module.exports = (app) => {
    app.get('/', (req, res, next) => {
        res.status(200).json({
            status: true,
            message: null,
        })
    })

    app.use('/books', bookRouter)
}