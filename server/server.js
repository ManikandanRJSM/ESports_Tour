const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const asyncHandler = require('./middleware/errorHander')
const dbCon = require('./config/db')
const port = process.env.PORT


dbCon()

app.use(asyncHandler)


app.listen(port, () => {
    console.log(`Express server runnin in port ${port}`)
})