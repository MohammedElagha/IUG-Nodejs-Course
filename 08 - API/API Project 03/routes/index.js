const bookRouter = require('./book')
const authRouter = require('./auth')
const reviewRouter = require('./review')

module.exports = (app) => {
    app.get('/', (req, res, next) => {
        res.status(200).json({
            status: true,
            message: null,
        })
    })

    app.use('/books', bookRouter)

    app.use('/auth', authRouter);

    app.use('/reviews', reviewRouter);
}