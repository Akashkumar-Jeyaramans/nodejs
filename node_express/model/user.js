const mongoose = require('mongoose')

// const User= mongoose.model("user",{
//     emailid:String,
//     password:String,
//     name:String,
//     age:Number
// });
const userSchema = mongoose.Schema({
    emailid : {type:String,required:true,unique:true},
    password : {type:String, required:true, minlength:6,maxlength:9},
    firstname:{type:String,default:"guest"},
    lastname:{type:String,default:"guest"},
    dob:{type:Date},
    gender:{type:String,enum:["male","female","other"]},
    active:{type:Boolean,default:true}
});
userSchema.statics.findActive = function()
{
    return this.find({active:true})
}
userSchema.methods.userName = function()
{
    let user = this;
    user.name=user.firstname=user.lastname;
    user.age = currentdate - dob;
    return user.save();
}
const User = mongoose.model("user",userSchema);

module.exports=User;