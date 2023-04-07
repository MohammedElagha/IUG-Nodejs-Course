const { readFile, readFileSync } = require('fs')

// async reading file
readFile('./data/text.txt', 'utf8', (err, data) => {
    console.log('async', data)
})


// sync reading file
const content = readFileSync('./data/text.txt', 'utf8')
console.log('sync', content)