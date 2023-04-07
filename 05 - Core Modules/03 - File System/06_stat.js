const { stat } = require('fs')

stat('./05_opendir.js', (err, state) => {
    console.log(state)
})