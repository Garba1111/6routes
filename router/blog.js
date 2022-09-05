const blogModel = require('../model/blogModel')
const userModel = require('../model/userModel')

const router = require('express').Router()

router.get('/:id',(req,res)=>{
    const id=req.params.id
    if (id.length==24) {
        userModel.findOne({_id:id},(err,data)=>{
            if (err) {
                console.log(err);
            } else {
                
                if (data) {
                    const userdata= data;
                    blogModel.find({},(err,data)=>{
                        if (err) {
                            console.log(err);
                        } else {
                            res.render('blog',{user:userdata, blogs:data})
                        }
                    })
                } else {
                    res.redirect('/register')
                }
                
            }
        })
    } else {
        res.status(404).send('404')
    }
    
    
})

module.exports= router