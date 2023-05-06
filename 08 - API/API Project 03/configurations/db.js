const { MongoClient } = require('mongodb')

const _uri = "mongodb://localhost:27017"

const dbConnection = (collection, cb) => {
    MongoClient.connect(_uri)
        .then(async (client) => {
            const db = client.db('nodejs_project').collection(collection);
            await cb(db)
            client.close();
        })
        .catch();
}

module.exports = dbConnection