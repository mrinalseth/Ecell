var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    email:{type:String,required:true},
    username:{type:String,required:true},
    textbox:{type:String,required:true},
})
module.exports = mongoose.model("User",userSchema);