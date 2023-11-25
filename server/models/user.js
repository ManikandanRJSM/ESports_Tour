const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    first_name : {
        type : String
    },
    last_name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    organisation : {
        type : String,
        default: null
    },
    user_type : {
        type : String,
    },
    country : {
        // type : mongoose.Schema.Types.ObjectId,
        // ref : 'country'
        type : String
    }
    
}, {timestamp : true})

module.exports = mongoose.model('userModel', userModel, 'users')