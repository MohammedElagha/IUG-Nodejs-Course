const { opendir } = require('fs')

// opendir('./', (err, dir) => {
//     for (let dirent of dir) {
//         console.log(dirent.name)
//     }
// })

opendir('./', async (err, dir) => {
    for await (let dirent of dir) {
        console.log(dirent.name)
    }
})