const exprees = require("express");

const app= exprees()

port = 8000
require('dotenv').config()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

const mongoose= require('mongoose') 
mongoose.connect(process.env.mongolink,{useNewUrlParser:true,useUnifiedTopology:true}).then(result=>{
    if (result) {
        console.log('db connected');
                
        app.listen(port,()=>{
            console.log("c");
        })
    } else {
        console.log('db not connected');
    }
}).catch(err=>console.log(err))


app.set('view engine', 'ejs');


app.use('/',require('./router/home'))
app.use('/blog',require('./router/blog'))
app.use('/register',require('./router/register'))
app.use('/login',require('./router/login'))
app.use('/addblog',require('./router/addblog'))






