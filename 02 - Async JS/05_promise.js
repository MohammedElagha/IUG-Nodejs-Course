const products = require("./data/products.json");

// async process
const getProductByName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(product => product.name === name);
            if (product) {
                resolve(product)
            } else {
                err = {message: "Not found", code: 404};
                reject(err)
            }
        }, 500)
    })
}

// run
getProductByName('Tea Ahmad')
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })