const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
app.use(cors())

dotenv.config({path:'./config.env'})
const PORT = process.env.PORT || 5000;
require('./db/conn')
app.use(express.json())
app.use(require('./router/router'))

// if(process.env.NODE_ENV=='production'){
//     app.use(express.static('client/build'));
//     const path = require('path')
//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }

app.listen(PORT,()=>{
    console.log('Server is onpen at localhost'+PORT)
})