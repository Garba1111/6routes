const router = require('express').Router()

const blogModel = require('../model/blogModel');
const userModel = require('../model/userModel');
//dbs
const user = require('../model/userModel')

router.get('/:id',(req,res)=>{
    // res.render('register',{msg:''})
    const userid = req.params.id;

    if (userid.length == 24) {
        userModel.findOne({_id:userid},(err,data)=>{
            if (err) {

                console.log(err)

            } else {

                if (data) {
                    const userdata= data;
                    
                    res.render('addblog', {msg:'',user:data})
                    
                } else {
                    res.status(404).send('404 page')
                    
                }
                
            }
        })
        
    } else {
        res.status(404).send('404 page')
        
    }
   


})

router.post('/:id',(req,res)=>{
    // res.render('register',{msg:''})
    const userid = req.params.id;
    const collect= req.body
    if (userid.length == 24) {
        userModel.findOne({_id:userid},(err,data)=>{
            if (err) {

                console.log(err)

            } else {

                if (data) {
                    res.render('addblog', {msg:'',user:data})
                    
                } else {
                    res.status(404).send('404 page')
                    
                }
                
            }
        })
        
    } else {
        
    }
   


})



module.exports= router