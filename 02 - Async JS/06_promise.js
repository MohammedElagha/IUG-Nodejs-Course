const products = require('./data/products.json');
const stores = require('./data/stores.json');
const cities = require('./data/cities.json');

/**
 * async processes
 */
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

const getStoreById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const store = stores.find(store => store.id === id);
            if (store) {
                resolve(store)
            } else {
                err = {message: "Not found", code: 404};
                reject(err)
            }
        }, 500)
    })
}

const getCityByName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const city = cities.find(city => city.name === name);
            if (city) {
                resolve(city)
            } else {
                err = {message: "Not found", code: 404};
                reject(err)
            }
        }, 500)
    })
}


// run
// test get city name from product
testProductName = 'Tea Ahmad'

getProductByName(testProductName).then(product => {
    getStoreById(product.store_id).then(store => {
        getCityByName(store.city).then(city => {
            console.log(city.name);
        }).catch(err => {
            console.log(err)
        })
    }).catch(err => {
        console.log(err)
    })
}).catch(err => {
    console.log(err)
})

// above is like callback hell
// so, the solution is promise chain
// like following

getProductByName(testProductName).then(product => {
    return getStoreById(product.store_id);
}).then(store => {
    return getCityByName(store.city)
}).then(city => {
    console.log(city.name);
}).catch(err => {
    console.log(err)
})