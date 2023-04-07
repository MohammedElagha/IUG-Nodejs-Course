const path = require('path')

console.log(__filename)

console.log(path.basename(__filename))

console.log(path.extname(__filename))

console.log(path.parse(__filename))

//////////////////////

const {readFile} = require('fs');

readFile(path.join(__dirname, 'data', 'text.txt'), 'utf8', (err, data) => {
    console.log(data)
})