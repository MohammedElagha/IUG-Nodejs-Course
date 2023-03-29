/**
 * import some functions from a folder contains many + index file
 */
const math = require('./modules/math')

// restructure
const { sum } = require('./modules/math')
const { multiply, division, reminder } = require('./modules/math')

const val1 = 5;
const val2 = 7;

// math.sum
const sumResult = math.sum(val1, val2);
console.log(`sum of ${val1} and ${val2} is ${sumResult}`)

// sum
const sumResult2 = sum(val1, val2);
console.log(`sum of ${val1} and ${val2} is ${sumResult2}`)

//////////

// reminder
console.log(math.division.reminder(val1, val2));
console.log(division.reminder(val1, val2));
console.log(reminder(val1, val2));
