const router = require('express').Router()

//dbs
const user = require('../model/userModel')

router.get('/',(req,res)=>{
    res.render('register',{msg:''})
})

router.post('/',(req,res)=>{
    const collect = req.body
    if (collect.username!=null && collect.email!=null && collect.password!=null) {
        if ((collect.username).length>=4 && (collect.email).length>=4 && (collect.password).length>=4  ) {
            user.find({Username:collect.username},(err,data)=>{
                if (err) {
                    console.log(err);
                } else {
                    if (data.length>0) {
                        res.render('register',{msg:'user already exist'})
                    } else {
                        user.find({email:collect.email},(err,data)=>{
                            if (err) {
                                console.log(err);
                            } else {
                                if (data.length>=1) {
                                    res.render('register',{msg:'email already exist'})
                                } else {
                                    const newuser = new user({Username:collect.username, email:collect.email,Pass:collect.password });
                                    newuser.save((err,data)=>{
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            res.redirect(`/blog/${data._id}`)
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            })
        } else {
            res.render('register',{msg:process.env.fillFormError})
            
        }
    } else {
        res.render('register',{msg: process.env.fillFormError})
        
    }
})

module.exports= router