/**
 * types of streams:
 * read, write, duplex, transform
 */


// an example for transform data from file to file

const { createReadStream, createWriteStream } = require('fs')

const readStream = createReadStream('./data/input.txt')

const writeStream = createWriteStream('./data/output.txt')

readStream.pipe(writeStream)