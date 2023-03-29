/**
 * you can get a data from a file using fs
 * but also u can get it by "importing", using require() function + relative path
 */


// require json file + auto converted to array of objects
const products = require('./data/products.json');

console.log(products);