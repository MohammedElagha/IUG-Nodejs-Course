const { dbConnection } = require('../configurations')
const { ObjectId } = require('bson')
const { createError } = require('http-errors')

const getBooks = (req, res, next) => {
    const pageNum = parseInt(req.query.page);

    if (isNaN(pageNum)) {
        res.status(400).json({
            status: false,
            message: "Number of page is required"
        })
    }

    const limit = 10;
    const skip = (pageNum - 1) * 10;

    dbConnection('books', async (collection) => {
        const books = await collection.find({}).skip(skip).limit(limit).toArray();
        res.json(books);
    })
}

const getBooksPagesCount = (req, res, next) => {
    dbConnection('books', async (collection) => {
        const count = await collection.count({});
        const limit = 10;

        res.json({
            pages: Math.ceil(count / limit)
        })
    })
}

const getOneBook = (req, res, next) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
        next(createError(400))
    }

    const _id = new ObjectId(req.params.id);

    dbConnection('books', async (collection) => {
        try {
            const book = collection.findOne({'_id': _id});

            if (!book) {
                res.status(404).json({
                    status: false,
                    message: 'resource not found'
                })
            }

            res.json(book);
        } catch (err) {
            next(createError(500))
        }
    })
}

module.exports = {
    getBooks, getBooksPagesCount, getOneBook
}