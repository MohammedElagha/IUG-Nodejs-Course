/**
 * import some functions from a folder contains many + index file
 */
const math = require('./modules/math/math')
// or
// const math = require('./modules/math')       # index.js

const val1 = 5;
const val2 = 7;

const sumResult = math.sum(val1, val2);
console.log(`sum of ${val1} and ${val2} is ${sumResult}`)

const multiplyResult = math.multiply(val1, val2);
console.log(`multiply of ${val1} and ${val2} is ${multiplyResult}`)