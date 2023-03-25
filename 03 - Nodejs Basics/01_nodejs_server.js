const http = require('http')

const port = 5050

const server = http.createServer();

server.listen(port, () => {
    console.log(`server is now listening on port ${port}`)
})

// http://localhost:5050