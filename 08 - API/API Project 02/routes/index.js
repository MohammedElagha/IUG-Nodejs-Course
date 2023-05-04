const studentRouter = require('./student')

module.exports = (app) => {
    app.get('/home', (req, res, next) => {
        const html = '<h1>Welcome to home page</h1>'
        res.send(html);
    })

    app.get('/profile', (req, res, next)=> {
        res.send('Welcome to profile')
    })

// get, post, put, delete
    app.get('/data', (req, res, next) => {
        console.log(req.query)
        const lang=  req.query.lang;

        console.log(req.headers)
        const host = req.get('Host')

        res.status(200).json([
            {
                id: 1,
                name: "Something"
            },
            {
                id: 2,
                name: "something 2"
            }
        ]);
    })

    // routes group -> student
    app.use('/student', studentRouter)
}