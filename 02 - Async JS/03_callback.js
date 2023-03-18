const products = require('./data/products.json');
const stores = require('./data/stores.json');
const cities = require('./data/cities.json');

/**
 * async processes
 */
const getProductByName = (name, cb) => {
    const product = products.find(product => product.name === name);
    cb(product);
}

const getStoreById = (id, cb) => {
    const store = stores.find(store => store.id === id);
    cb(store);
}

const getCityByName = (name, cb) => {
    const city = cities.find(city => city.name === name);
    cb(city);
}


/**
 * callbacks and run
 */

const testProductName = "Tea Ahmad";

getProductByName(testProductName, (product) => {
    console.log('product is', product);

    getStoreById(product.store_id, (store) => {
        console.log('store is', store);

        getCityByName(store.city, (city) => {
            console.log('city is', city);
        })
    })
})

// above calls is called "callback hell"