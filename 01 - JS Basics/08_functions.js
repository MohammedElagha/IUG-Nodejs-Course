/**
 * many ways to define a function
 */

// method 1

function sum (n, m) {
    return n + m;
}

console.log('sum = ', sum(4, 6));

////////////////////////////////

// method 2 (arrow function)

// style 1
const multiply = (n, m) => {
    return n * m;
}

// style 2 - for only line block
const division = (n, m) => n / m;

// style 3
const reminder = function (n, m) {
    return n % m;
}

console.log('multiply = ', multiply(4, 6));
console.log('division = ', division(4, 6));
console.log('reminder = ', reminder(4, 6));

////////////////////////////////

// method 3

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person);
console.log(person.fullName());