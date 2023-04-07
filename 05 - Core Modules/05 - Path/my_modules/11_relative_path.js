// this relative path is relative to 11_relative_path.js file
const story = require('./data/story.txt')
console.log(story)


///////////////


const { readFile } = require('fs')

// this relative path is relative to when run "node"
readFile('./data/story.txt', 'utf8', (err, data) => {
    console.log(err)
    console.log(data)
})