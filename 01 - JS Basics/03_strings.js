/**
 * 3 method to define a string: single quotes, double quotes, and backticks
 */

const firstName = 'Ahmed';
const midName = "Ali";
const lastName = `Hosam`;

////////////////////////////////////

// string length
console.log(firstName.length);

// string indexing
console.log(midName[1]);

// string concatenation
console.log(firstName + ' ' + midName);
// or using backticks
console.log(`This is for ${firstName} ${midName}, family is ${lastName}`);

////////////////////////////////////

// multi-line text

const story = "This is my success story\nHow I be success one\nin this world";

// or using backticks
const song = `Hi to my world
with no more words
rather my words`;

console.log(story);
console.log(song);