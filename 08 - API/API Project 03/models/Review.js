const {dbConnection} = require('../configurations')
const {reviewValidator} = require("../validators");

class Review {
    constructor(reviewData) {
        this.reviewData = reviewData
    }

    save(cb) {
        dbConnection('reviews', async (collection) => {
            try {
                await collection.updateOne(
                    {
                        _book_id: this.reviewData._book_id,
                        _reviewer_id: this.reviewData._reviewer_id
                    },
                    {
                        $set: {
                            _book_id: this.reviewData._book_id,
                            _reviewer_id: this.reviewData._reviewer_id,
                            rating: this.reviewData.rating,
                            comment: this.reviewData.comment
                        }
                    },
                    {
                        upsert: true
                    }
                )

                cb({
                    status: true
                })
            } catch (err) {
                cb({
                    status: false,
                    message: err.message
                })
            }
        })
    }

    static remove (_id, cb) {
        dbConnection('reviews', async (collection) => {
            try {
                await collection.deleteOne({_id})

                cb({status: true})
            } catch (err) {
                cb({status: false, message: err.message})
            }
        })
    }

    static getOne (_id) {
        return new Promise((resolve, reject) => {
            dbConnection('reviews', async (collection) => {
                try {
                    const review = await collection.findOne({_id})

                    if (review) {
                        resolve({status: true, data: review})
                    } else {
                        resolve({status: false})
                    }
                } catch (err) {
                    reject({status: false, message: err.message})
                }
            })
        })
    }

    static validate(reviewData) {
        const validation = reviewValidator.validate(reviewData)
        return validation
    }
}

module.exports = Review