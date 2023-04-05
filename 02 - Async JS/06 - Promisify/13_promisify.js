const { readFile } = require('fs')
const { promisify } = require('util')

/*
readFile('./data.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err.message);
        return;
    }

    console.log(data)
})
*/

const pReadFile = promisify(readFile);

pReadFile('./data.txt', 'utf8')
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err.message)
    })