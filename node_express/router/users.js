const express = require('express')
const router = express.Router()
const axios = require('axios')


router.get('/users',async (req,res)=>{
    
    try{
      
    const result= await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log("result");
   res.send(result.data);
    //res.send({messg:result})
  }
  catch(err){
    res.send("cannot fetch the data ......");
    res.status(500)
  }
}
)

  module.exports = router;