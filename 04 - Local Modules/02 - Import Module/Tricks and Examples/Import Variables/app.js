// import variables as import file
const secret = require('./configs/secret_keys.json')

// import variables as module
const dbConfig = require('./configs/database')


console.log('server key is', secret.server_key)

console.log('db host is', dbConfig.host)