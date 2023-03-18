/**
 * 2 types of operations: blocking vs non-blocking
 * 2 exec: sync and async (background)
 */


console.log(1);
console.log(2);

// async process
/**
 * async maybe: timer, long-time process, and I/O operations (files and DB)
 */
setTimeout(() => {
    console.log('async');
}, 1000);

console.log(3);
console.log(4)