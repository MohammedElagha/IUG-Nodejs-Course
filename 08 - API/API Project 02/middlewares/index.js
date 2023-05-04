module.exports = (app) => {
    app.use((req, res, next) => {
        const lang = req.query.lang;

        if (lang && (lang === 'ar' || lang === 'en')) {
            next();
        }

        res.status(400).json({
            error: 'lang is required...'
        })
    })

    app.use((req, res, next) => {
        if (req.url.startsWith('/auth')) {
            next();
        }

        // some task
        next(); // required -> must or must not next
    })
}