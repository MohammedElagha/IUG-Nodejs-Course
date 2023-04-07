/**
 * there are some modules/functions are not need to be imported, because it global (already imported)
 * built-in functions usually be globals
 */

// example
const absVal = Math.abs(-8);

// example
const apiResponse = fetch('some_url');

// example
console.log(global)
global.car = 'delorean'

// example
console.log(process.env)
console.log(process.argv)
console.log(process.memoryUsage())

