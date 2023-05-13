const { dbConnection } = require('../configurations')

class Reviewer {
    constructor(reviewerData) {
        this.reviewerData = reviewerData
    }

    save(cb) {
        dbConnection('reviewers', async (collection) => {
            try {
                await collection.updateOne(
                    {name: this.reviewerData.name, _user_id: null},
                    {$set: {_user_id: this.reviewerData._user_id, name: this.reviewerData.name}},
                    {upsert: true}
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
}

module.exports = Reviewer