const express = require('express')
const router = express.Router()
const axios = require('axios')       


router.get('/weather',async (req,res)=>{
    const city = req.query.city
    const state = req.query.state
    try{
      
    const result= await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+","+state+"&appid=6034df89d5216dd5dc6587d775c9c373")
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