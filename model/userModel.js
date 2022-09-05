const mongoose= require('mongoose')

const Schema = mongoose.Schema

const user = new Schema({
    Username:String,
    email: String,
    Pass:String
})


module.exports= mongoose.model("user",user)