module.exports = (app) => {
    app.use((req, res, next) => {
        next();
    })
}