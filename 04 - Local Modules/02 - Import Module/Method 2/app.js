/**
 * import some functions from a file contains many
 */
const math = require('./modules/math')
// or
// const { sum } = require('./modules/math')
// const { multiply } = require('./modules/math')
// or
// const { sum, multiply } = require('./modules/math')


const val1 = 5;
const val2 = 7;

const sumResult = math.sum(val1, val2);
console.log(`sum of ${val1} and ${val2} is ${sumResult}`)

const multiplyResult = math.multiply(val1, val2);
console.log(`multiply of ${val1} and ${val2} is ${multiplyResult}`)