/**
 * async usually used to handle returned promise (instead of promise chain)
 */

const fs = require('fs');

/**
 * async processes
 */
const getProductByName = (name) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/products.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const json = JSON.parse(data);
                const product = json.find(product => product.name === name);

                if (product) {
                    resolve(product);
                } else {
                    err = {message: "Not found", code: 404};
                    reject(err);
                }
            }
        });
    })
}

const getStoreById = (id) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/stores.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const json = JSON.parse(data);
                const store = json.find(store => store.id === id);

                if (store) {
                    resolve(store);
                } else {
                    err = {message: "Not found", code: 404};
                    reject(err);
                }
            }
        });
    })
}

const getCityByName = (name) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/cities.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const json = JSON.parse(data);
                const city = json.find(city => city.name === name);

                if (city) {
                    resolve(city);
                } else {
                    err = {message: "Not found", code: 404};
                    reject(err);
                }
            }
        });
    })
}


// promise handling by async

const getCityFromProduct = async (productName) => {
    try {
        const product = await getProductByName(productName)
        const store = await getStoreById(product.store_id)
        const city = await getCityByName(store.city)

        console.log(city)
    } catch (err) {
        console.log(err.message)
    }
}

getCityFromProduct('Tea Ahmad')


/**
 * look files 07,08_async
 * we notice that you can handle async response within async function, or return async response from async function
 * if u handle it within async(), you can access it directly without then,catch
 * but if u return it from async(), you will deal with async response as a promise then,catch
 */