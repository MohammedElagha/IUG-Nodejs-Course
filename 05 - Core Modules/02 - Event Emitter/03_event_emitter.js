const { EventEmitter } = require('events')

const myEmitter = new EventEmitter();

// listener
myEmitter.on('greeting', () => {
    console.log('Hello to my app')
})

myEmitter.on('greeting', name => {
    console.log(`Hello ${name}`)
})

// emitter
myEmitter.emit('greeting', 'Anas');