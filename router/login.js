const router = require('express').Router()

//db
const user = require('../model/userModel')

router.get('/',(req,res)=>{
    res.render('login',{msg:''})
})

router.post('/',(req,res)=>{
    const collect= req.body;
    if (collect.username!=null && collect.password!=null) {
        if ((collect.username).length>=4 && (collect.password).length>=4) {
            user.findOne({Username:collect.username, Pass:collect.password},(err,data)=>{
                if (err) {
                    console.log(err);
                } else {
                    if (data) {
                        res.redirect(`/blog/${data._id}`)
                    } else {
                        res.render('login',{msg:'user not found'})
                    }
                }
            })
        } else {
            res.render('login',{msg:process.env.fillFormError})
        }
    } else {
    res.render('login',{msg:process.env.fillFormError})
        
    }
})
module.exports= router