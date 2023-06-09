const products = require('../data/products.json');
const stores = require('../data/stores.json');
const cities = require('../data/cities.json');

// async process
const getProductByName = (name, cb) => {
    // timer for simulating an async
    setTimeout(() => {
        const product = products.find(product => product.name === name);
        cb(product);
    }, 500)
}

// callback function
const handleGetProductByName = (product) => {
    console.log(product);
};

// run
const testName = "Tea Ahmad";
getProductByName(testName, handleGetProductByName);

// or
getProductByName(testName, (product) => {
    console.log(product);
});