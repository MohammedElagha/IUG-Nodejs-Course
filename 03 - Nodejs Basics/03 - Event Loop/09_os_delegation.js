const { pbkdf2 } = require('crypto')
const { createServer } = require('http')

const start = Date.now()

const hash = () => {
    pbkdf2('password', 'solt', 10000, 1000, 'sha256', () => {
        console.log('Hash', Date.now() - start)
    })
}

const lis = () => {
    createServer().listen(3000, () => {
        console.log('listening', Date.now() - start)
    })
}

hash();
hash();
hash();
hash();
lis();