const express = require('express')
const router = express.Router()
const axios = require('axios')
const Customer = require('../model/customer')
//user
router.get('/',async(req,res)=>{
    try{
       const customer=await Customer.find()
       res.send(customer);
    }
    catch(err)
    {
        console.log(err);
    }
})

// to fetch a particular record based on id(select * from table where id=8787)
router.get('/:customerId',async(req,res)=>{
        const uid=req.params
        console.log(uid);
    try{
       const user=await Customer.findById(uid.customerId)
       console.log("customer");
       res.send(customer);
    }
    catch(err)
    {
        console.log(err);
    }
})
router.post('/',async (req,res)=>{
 
    const data=req.body;
    //model will be private in post method
   // const User= Mongoose.model()
   //instead of above model we create a new file for model and include that here
   const customer = new Customer({
       customer_name : data.customer_name,
       bill_no : data.bill_no,
       phone_no : data.phone_no,
       amount : data.amount,
       purchase_date : data.purchase_date
   });
   try{
    await customer.save()
    console.log("data inserted")
   }
   catch(err){
       res.status(400).send({message : "data not occured"})
       console.log(err);
   }
  })

  module.exports = router;