const express = require('express')
const Router = express.Router()
const userSchema = require('../schema/userSchema')
const productSchema = require('../schema/productSchema')
Router.get('/', async (req, res) => {
    let result = await productSchema.find()
    res.send(result)

})
Router.get('/header/:id', async (req, res) => {
    let result = await productSchema.findOne({_id:req.params.id})
   
    res.send(result)

})
Router.get('/admin/product', async (req, res) => {
    let result = await productSchema.find()
    res.send(result)
})

Router.get('/search/:key',async(req,res)=>{
    let result= await productSchema.find({
        "$or":[
            {topic:{$regex:req.params.key}},
            {header:{$regex:req.params.key}},
        ]
    })
    res.send(result)
})
//signup && login
Router.post('/admin/signup', async (req, res) => {
    const { name, email, password, cpassword } = req.body;
    if (name && email && password && cpassword) {
        let findData = await userSchema.findOne({ email })
        if (findData) {
            res.send({ 'error': "email is already present" })
        } else {
            if (password == cpassword) {
                let result = new userSchema(req.body)
                result = await result.save()
                res.send(result)
            } else {
                res.send({ "Error": "Both password is must be same" })
            }

        }

    } else {
        res.json({ "error": "fill all details" })
    }
})
Router.post('/admin', async (req, res) => {
    
    const { email, password } = req.body;
    if (email && password) {
        let result = await userSchema.findOne(req.body)
        if (result) {
            res.send(result)

        } else {
            console.log({ "Error": "Data not found" })
          
        }
    } else {
        res.send({ "error": "fill Both field" })
    }

})



//product
Router.post('/admin/addProduct', async (req, res) => {
    let { topic, header, content } = req.body;
    if (topic && header && content) {
        let findData = await productSchema.findOne({ header })
        if (findData) {
            res.send({ 'error': "this headeing is available" })


        } else {
            let result = new productSchema(req.body)
            result = await result.save()
            res.send(result)
        }

    } else {
        res.send({ 'error': 'fill all field' })
    }

})
Router.delete('/admin/product/:id', async (req, res) => {
    let result = await productSchema.deleteOne({ _id: req.params.id })
    res.send(result)
})
Router.put('/admin/updateProduct/:id', async (req, res) => {
    let result = await productSchema.updateOne({ _id: req.params.id }, { $set: req.body })
    res.send(result)
})
Router.get('/admin/updateProduct/:id', async (req, res) => {
    let result = await productSchema.findOne({ _id: req.params.id })
    res.send(result)
})

module.exports = Router;
