const sum = (a, b) => {
    return a + b;
}

const multiply = (a, b) => {
    return a * b;
}

// use an object; not array. to be able to use function later by name; not index
module.exports = {
    sum,            // key is default = function name
    mp: multiply
};

