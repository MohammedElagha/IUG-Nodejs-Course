/**
 * import some functions from a folder contains many + index file
 */
const math = require('./modules/math')
// or
const { sum } = require('./modules/math')
const { multiply } = require('./modules/math')

const val1 = 5;
const val2 = 7;

let sumResult = math.sum(val1, val2);
// or
sumResult = sum(val1, val2);
// or
sumResult = math.iMath.sum(val1, val2);
console.log(`sum of ${val1} and ${val2} is ${sumResult}`)

const multiplyResult = math.multiply(val1, val2);
console.log(`multiply of ${val1} and ${val2} is ${multiplyResult}`)