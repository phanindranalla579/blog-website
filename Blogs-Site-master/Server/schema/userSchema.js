const mongoose = require('mongoose')
const modelSchema =  mongoose.Schema({
    name:String,
    email:String,
    password:String,
    cpassword:String
})

module.exports = mongoose.model('users',modelSchema)