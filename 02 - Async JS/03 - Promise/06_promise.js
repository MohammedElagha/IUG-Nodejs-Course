const fs = require('fs');

/**
 * async processes
 */
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

const getStoreById = (id) => {
    return new Promise((resolve, reject) => {
        const data = fs.readFileSync('./data/stores.json');
        const json = JSON.parse(data);
        const store = json.find(store => store.id === id);

        if (store) {
            resolve(store);
        } else {
            err = {message: "Not found", code: 404};
            reject(err);
        }
    })
}

const getCityByName = (name) => {
    return new Promise((resolve, reject) => {
        const data = fs.readFileSync('./data/cities.json');
        const json = JSON.parse(data);
        const city = json.find(city => city.name === name);

        if (city) {
            resolve(city);
        } else {
            err = {message: "Not found", code: 404};
            reject(err);
        }
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