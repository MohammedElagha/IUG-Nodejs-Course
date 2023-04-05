const fs = require('fs');
const { promisify } = require('util')

const getProductByName = (name, cb) => {
    fs.readFile('./data/products.json', 'utf8', (err, data) => {
        if (err) {
            cb(err, null)
        } else {
            const json = JSON.parse(data)
            const product = json.find(product => product.name === name)
            cb(undefined, product)
        }
    })
}

const findProduct = promisify(getProductByName)

findProduct('Tea Ahmad')
    .then(product => {
        console.log(product)
    })
    .catch(err => {
        console.log(err.message)
    })