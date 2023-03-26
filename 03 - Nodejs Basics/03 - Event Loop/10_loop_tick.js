const { pbkdf2 } = require('crypto')

const start = Date.now()

const hash = () => {
    pbkdf2('password', 'solt', 10, 1000, 'sha256', () => {
        console.log('Hash', Date.now() - start)
    })
}

setImmediate(() => {
    console.log('setImmediate', Date.now() - start)
}, "Educative")


hash();

process.nextTick(() => {
    console.log('nextTick', Date.now() - start)
})

hash();
hash();
hash();
