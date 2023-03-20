const fs = require('fs');

// async process
const getProductByName = (name) => {
    return new Promise((resolve, reject) => {
        const data = fs.readFileSync('./data/products.json');
        const json = JSON.parse(data);
        const product = json.find(product => product.name === name);

        if (product) {
            resolve(product);
        } else {
            err = {message: "Not found", code: 404};
            reject(err);
        }
    })
}

// run
getProductByName('Tea Ahmad')
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })