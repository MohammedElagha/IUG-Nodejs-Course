const fs = require('fs');

const getProductByName = async (name, cb) => {
    // await is optional, but it must be used when there are other lines after this line
    fs.readFile('./data/products.json', 'utf8', (err, data) => {
        if (err) {
            cb(err, null)
        } else {
            cb(undefined, data)
        }
    })
}

const handleGetProductByName = (err, product) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(product);
    }
}

getProductByName('Tea Ahmad', handleGetProductByName)
