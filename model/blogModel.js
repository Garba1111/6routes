const mongoose= require('mongoose')

const Schema = mongoose.Schema

const blog = new Schema({
    Title:String,
    AuthorId: String,
    Desc:String
})


module.exports= mongoose.model("blog",blog)