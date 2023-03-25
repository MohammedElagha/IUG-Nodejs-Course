const http = require('http')

const port = 5050

/**
 * simulate an error
 * and stop the process
 */
const someError = true

if (someError) {
    process.exit(1)
}


/**
 * create Node.js http server with handling multi urls
 */
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.end(`
                <html>
                    <head>
                        <title>My first page</title>
                    </head>
                    <body>
                        <h1>Welcome to my node application</h1>
                    </body>
                </html>
            `);
            break;
        case 'user':
            res.end('User page, welcome');
            break;
        case 'admin':
            res.end('Employee good morning');
            break;
        default:    // not defined url
            res.end('Page not found');
            break;
    }

});

/**
 * listen to requests
 */
server.listen(port, () => {
    console.log(`server is now listening on port ${port}`)
})