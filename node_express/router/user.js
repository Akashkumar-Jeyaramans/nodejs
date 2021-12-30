//emaailid password name and age with simple validation

const express = require('express')
const router = express.Router()
const axios = require('axios')
const User = require('../model/user')
//user
router.get('/',async(req,res)=>{
    try{
       const user=await User.findActive()
       res.send(user);
    }
    catch(err)
    {
        console.log(err);
    }
})

// to fetch a particular record based on id(select * from table where id=8787)
router.get('/:userId',async(req,res)=>{
        const uid=req.params
        console.log(uid);
    try{
       const user=await User.findById(uid.userId)
       console.log("user");
       res.send(user);
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
   const user = new User({
       emailid : data.emailid,
       password : data.password,
       firstname : data.firstname,
       lastname: data.lastname,
       dob : data.dob,
       gender : data.gander
       
   });
   try{
    await user.userName()
    console.log("data inserted")
   }
   catch(err){
       res.status(400).send({message : "data not occured"})
       console.log(err);
   }
  })

  module.exports = router;