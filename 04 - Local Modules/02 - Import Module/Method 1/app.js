/**
 * import a function from a file contains only it
 */
const sum = require('./modules/sum')
const multiply = require('./modules/multiply')

const val1 = 5;
const val2 = 7;

const sumResult = sum(val1, val2);
console.log(`sum of ${val1} and ${val2} is ${sumResult}`)

const multiplyResult = multiply(val1, val2);
console.log(`multiply of ${val1} and ${val2} is ${multiplyResult}`)