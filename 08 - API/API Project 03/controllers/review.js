const { Review, Book } = require('../models')
const createError = require('http-errors')
const {ObjectId} = require("bson");
const {returnJson} = require("../my_modules/json_response");

const add = (req, res, next) => {
    const reviewData = req.body
    reviewData._reviewer_id = req._reviewer_id

    const validation = Review.validate(reviewData)
    if (validation.error) {
        return next(createError(400, validation.error.message))
    }

    const review = new Review(reviewData)

    review.reviewData._reviewer_id = new ObjectId(review.reviewData._reviewer_id)
    review.reviewData._book_id = new ObjectId(review.reviewData._book_id)

    review.save((result) => {
        if (!result.status) {
            return next(createError(500))
        }

        Book.refreshAvgRating(review.reviewData._book_id)

        return returnJson(res, 200, true, "", review.reviewData)
    })
}

const remove = (req, res, next) => {
    const _id = new ObjectId(req.params.id);

    Review.getOne(_id)
        .then(result => {
            if (!result.status) {
                return next(createError(404))
            }

            const review = result.data;

            Review.remove(_id, (result) => {
                if (!result.status) {
                    return next(createError(500, result.message))
                }

                Book.refreshAvgRating(review._book_id)

                return returnJson(res, 200, true, "", null)
                // res.status(200).json(result);
            })
        })
        .catch(err => {
            return next(createError(500, result.message))
        })
}

module.exports = {
    add, remove
}