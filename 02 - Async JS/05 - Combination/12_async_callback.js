const fs = require('fs');

const getProductByName = (name, cb) => {
    fs.readFile('./data/products.json', 'utf8', (err, data) => {
        if (err) {
            cb(err, null)
        } else {
            const json = JSON.parse(data);
            const product = json.find(product => product.name === name)
            cb(undefined, product)
        }
    })
}

const handleGetProductAndThenGetStore = async (err, product) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(product);

        await fs.readFile('./data/stores.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err.message);
            } else {
                const json = JSON.parse(data);
                const store = json.find(store => store.id === product.store_id)
                console.log(store);
            }
        })
    }
}

getProductByName('Tea Ahmad', handleGetProductAndThenGetStore)
