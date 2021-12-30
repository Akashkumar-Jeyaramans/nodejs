const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/comments',async (req,res)=>{
    
    try{
      
    const result= await axios.get("https://jsonplaceholder.typicode.com/comments")
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