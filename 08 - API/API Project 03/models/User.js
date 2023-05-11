const { dbConnection } = require('../configurations')
const { userValidator } = require('../validators')

class User {
    constructor(userData) {
        this.userData = userData;
    }

    save() {
        try {
            dbConnection('users', async (collection) => {
                await collection.insertOne(this.userData)
            })
        } catch (err) {
            return {
                status: false,
                error: err.message
            };
        }

        return {
            status: true
        }
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