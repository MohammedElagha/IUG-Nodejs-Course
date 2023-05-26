const returnJson = (res, statusCode, status, message, data) => {
    return res.status(statusCode).json(
        {
            status: {
                status: status,
                message: message
            },
            data: data
        }
    )
}

module.exports = {
    returnJson
}