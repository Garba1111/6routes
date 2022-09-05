const router = require('express').Router()

router.get('/',(req,res)=>{
    res.redirect('/register')
})

module.exports= router