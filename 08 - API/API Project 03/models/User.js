const { dbConnection } = require('../configurations')
const { userValidator } = require('../validators')

class User {
    constructor(userData) {
        this.userData = userData;
    }

    save() {
        dbConnection('users', async (collection) => {
            await collection.insertOne(this.userData);
        })
    }

    isExist() {
        return new Promise((resolve, reject) => {
            try {
                dbConnection('users', async (collection) => {
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
                        if (this.userData.email === user.email) {
                            resolve({
                                check: true,
                                message: 'This email is already used'
                            })
                        } else if (this.userData.username === user.username) {
                            resolve({
                                check: true,
                                message: 'this username is already used'
                            })
                        }
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }

    static validate(userData) {
        const validation = userValidator.validate(userData);
        return validation;
    }
}

const user = new User({
    name: 'Ahmed Ali',
    email: 'hamm@gmail.com',
    username: 'aali',
    password: '11111aaaaa'
})

// User.validate(user.userData)

// user.save()

// user.isExist()
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => console.log(err))


module.exports = User