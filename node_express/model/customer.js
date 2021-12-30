const mongoose = require('mongoose')

// const User= mongoose.model("user",{
//     emailid:String,
//     password:String,
//     name:String,
//     age:Number
// });
const customerSchema = mongoose.Schema({
    
    customer_name:{type:String,default:"guest"},
    bill_no:{type:String},
    phone_no:{type:Number,minLength:[10,"you entered wrong number"],maxLength:[10,"you entered wrong number"]},
    amount:{type:Number},
    purchase_date:{type:String}
});
const Customer = mongoose.model("customer",customerSchema);
                                                             
module.exports=Customer; 