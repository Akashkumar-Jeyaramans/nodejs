const express = require('express');

const app = express();
const axios = require('axios')
app.use(express.json());


app.get("/dummy",(req,res)=>{
    res.send({message:"Get working"});
})

app.post("/create",(req,res)=>{
    console.log(req.body);
    res.send({message:"Post working"});
})

app.get('/todo', async(req,res)=>{
    try{
    const result = await axios.get("https://api.unsplash.com/search/photos?client_id=h1IadB0voqEtSNObhx0u4EvZ6uLitZuN6V23X7_UVpE&page=1&query=lions")
    console.log("running");
    res.send(result.data);
  //  res.send({messg:result})
  }
  catch(err){
      console.log("error")
    res.send("cannot fetch the data ......");
  }
    
  })


app.listen(8000,()=>{
    console.log("server is running")
}
)