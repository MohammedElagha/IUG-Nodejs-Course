// an example for socket between client and server

const { createServer } = require('http')

const server = createServer();

server.listen(5000)

server.on('connection', (socket) => {
    console.log(socket)
})