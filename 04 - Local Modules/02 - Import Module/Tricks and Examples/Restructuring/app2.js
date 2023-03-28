const { sum } = require('./modules/math')
const { multiply } = require('./modules/math')
// or
// const { sum, multiply } = require('./modules/math')

const sumResult = sum(val1, val2);
console.log(`sum of ${val1} and ${val2} is ${sumResult}`)

const multiplyResult = multiply(val1, val2);
console.log(`multiply of ${val1} and ${val2} is ${multiplyResult}`)
