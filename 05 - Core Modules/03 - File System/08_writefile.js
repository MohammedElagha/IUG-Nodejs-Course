const { open, writeFile } = require('fs')

open('./data/text.txt', (err, fd) => {
    if (err) {
        console.log(err)
        return;
    }

    writeFile(fd, 'Hello new writing', (err) => {
        if (err) {
            console.log(err)
        }
    })
})