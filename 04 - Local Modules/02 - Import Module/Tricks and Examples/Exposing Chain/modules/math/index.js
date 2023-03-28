const divisionOps = require('../../../Exposing Chain/modules/math/division')

module.exports = {
    sum: require('./sum'),                  // function
    multiply: require('./multiply'),        // function
    division: require('../../../Exposing Chain/modules/math/division'),        // object
    div: require('../../../Exposing Chain/modules/math/division').division,    // function from imported import
    reminder: divisionOps.reminder          // function from imported import
};