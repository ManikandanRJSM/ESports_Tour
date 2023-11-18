const express = require('express')
const { login, register } = require('../controllers/organiser/TokenAuth')

const route = express.Router()


route.get('/login', login)


route.get('/register', register)

module.exports = route