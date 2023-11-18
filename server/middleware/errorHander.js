
const errorHandler = (req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)
    res.json({
        message : res.message,
        stack : res.stack
    })
    
}

module.exports = errorHandler