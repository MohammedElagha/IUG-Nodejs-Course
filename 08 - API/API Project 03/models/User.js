const { dbConnection } = require('../configurations')
const { userValidator, loginValidator } = require('../validators')
const { hashSync, compareSync } = require('bcryptjs')

class User {
    constructor(userData) {
        this.userData = userData;
    }

    save(cb) {
        dbConnection('users', async (collection) => {
            try {
                const hashedPassword = hashSync(this.userData.password, 12)
                this.userData.password = hashedPassword

                await collection.insertOne(this.userData)
                    .then(result => {
                        cb({
                            status: true,
                            _user_id: result.insertedId
                        })
                    })

            } catch (err) {
                cb({
                    status: false,
                    message: err.message
                })
            }
        })
    }

    isExist() {
        return new Promise((resolve, reject) => {
            dbConnection('users', async (collection) => {
                try {
                    const user = await collection.findOne({
                        '$or': [
                            {username: this.userData.username},
                            {email: this.userData.email}
                        ]
                    })

                    if (!user) {
                        resolve({
                            check: false
                        })
                    } else {
                        if (user.email === this.userData.email) {
                            resolve({
                                check: true,
                                message: 'The email is already used'
                            })
                        } else if (user.username === this.userData.username) {
                            resolve({
                                check: true,
                                message: 'The username is already used'
                            })
                        }
                    }
                } catch (err) {
                    reject(err)
                }
            })
        })
    }

    static validate(userData) {
        try {
            const validationResult = userValidator.validate(userData)
            return validationResult;
        } catch (err) {
            return false;
        }
    }

    static login(loginData) {
        return new Promise((resolve, reject) => {
            // validation
            const validation = loginValidator.validate(loginData)
            if (validation.error) {
                const error = new Error(validation.error.message)
                error.statusCode = 400
                resolve(error)
            }

            // find user
            dbConnection('users', async (collection) => {
                try {
                    const dbResult = await collection.aggregate([
                        {
                            $lookup: {
                                from: 'reviewers',
                                localField: '_id',
                                foreignField: '_user_id',
                                as: 'reviewer'
                            }
                        },
                        {
                            $match: {
                                username: loginData.username
                            }
                        },
                        {
                            $limit: 1
                        }
                    ]).toArray()


                    // const user = await collection.findOne(
                    //     {username: loginData.username},
                    //     {projection: {username: 1, password: 1}}
                    // )

                    if (dbResult) {
                        const user = dbResult[0]

                        if (!user || !compareSync(loginData.password, user.password)) {
                            const error = new Error('Wrong or not found username or password')
                            error.statusCode = 401
                            resolve(error)
                        }

                        user.reviewer = (user.reviewer) ? user.reviewer[0] : null
                        resolve(user)
                    } else {
                        const error = new Error('Wrong or not found username or password')
                        error.statusCode = 401
                        resolve(error)
                    }

                    // dbConnection('reviewers', async (relatedCollection) => {
                    //     const reviewer = await relatedCollection.findOne(
                    //         {_user_id: user._id}
                    //     )
                    //
                    //     user.reviewer = reviewer;
                    //
                    //     resolve(user);
                    // })

                    // resolve(user)
                } catch (err) {
                    reject(err)
                }
            })
        })
    }
}

// const user = new User({
//     name: 'Ahmed Ali',
//     email: 'hamm@gmail.com',
//     username: 'aali',
//     password: '11111aaaaa'
// })

// User.validate(user.userData)

// user.save()

// user.isExist()
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => console.log(err))


module.exports = User