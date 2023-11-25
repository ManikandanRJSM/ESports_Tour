const asyncHandler = require('express-async-handler')
const userModel = require('../../models/user')

const login = asyncHandler( async(req, res) => {
    console.log('login')
})

const register = asyncHandler( async(req, res) => {
    const { first_name, last_name, email, organisation, password, country } = req.body
    console.log(first_name, last_name, email, organisation, password, country)
})

module.exports = { login,  register}