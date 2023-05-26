const {dbConnection} = require('../configurations')

class Book {

    static refreshAvgRating (_book_id) {
        dbConnection('reviews', async (collection) => {
            const reviews = await collection.find(
                {_book_id: _book_id}
            ).toArray()

            const count = reviews.length
            let sum = 0

            for (let i = 0 ; i < count ; i++) {
                if (reviews[i].rating) {
                    sum += reviews[i].rating
                }
            }

            const avg = sum / count

            dbConnection('books', async (collection) => {
                await collection.updateOne(
                    {_id: _book_id},
                    {$set: {rating: avg}}
                )
            })
        })
    }
}

module.exports = Book