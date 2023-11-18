
const errorHandler = (req, res) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.statusCode(statusCode)
    res.json({
        message : res.message,
        stack : res.stack
    })
    
}

module.exports = errorHandler