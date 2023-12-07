const mongoose = require('mongoose')
const productSchema =   mongoose.Schema({
    topic:String,
    header:String,
    content:String
})

module.exports = mongoose.model('products',productSchema)