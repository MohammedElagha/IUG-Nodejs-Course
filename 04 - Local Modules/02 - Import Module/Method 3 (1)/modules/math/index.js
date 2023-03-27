module.exports = {
    sum: require('./sum'),
    multiply: require('./multiply')
};

// or

const sum = require('./sum');
const multiply = require('./multiply')

module.exports = {
    sum,
    multiply
}