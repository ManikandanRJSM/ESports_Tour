const mongoose = require('mongoose')

const countryModel = mongoose.Schema({
    country_name : {
        type : String
    },
    country_code : {
        type : Number
    },
    short_name : {
        type : String
    }
}, {timestamp : true})

module.exports = mongoose.model('countryModel', countryModel, 'country')