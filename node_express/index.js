const express = require('express')// importing express module
var bodyParser = require('body-parser')
const { get } = require('http')
const axios=require('axios')
const app = express()

const todoRouter = require("./router/todo")
const weatherRouter = require("./router/weather")
const postsRouter = require("./router/posts")
const commentsRouter = require("./router/comments")
const albumsRouter = require("./router/albums")
const photosRouter = require("./router/photos")
const usersRouter = require("./router/users")
const UserRouter = require("./router/user")
const CustomerRouter= require("./router/customer")
//
const mongoose = require('mongoose');
const Customer = require('./model/customer');
//mongoose.connect('mongodb+srv://admin:akash@cluster0.xiodg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
//localhost:27017/newdatabase 
mongoose.connect('mongodb://localhost:27017/customerdb');
// const Cat = mongoose.model('Cat', { name: String , color : String});

// //const kitty = new Cat({ name: 'ethan' });
// const kitty1 = new Cat({ name: 'tommy' });
// const kitty2 = new Cat({ name: 'tommy', color:'white' });
// //kitty.save().then(() => console.log('meow'));
// kitty1.save().then(() => console.log('meow1'));
// kitty2.save().then(() => console.log('meow2'));




//const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hi... hello!')
})

app.get('/user',(req,res)=>
{
  console.log(req.query);
  res.send("user page.....");
})
app.get('/users/:type',(req,res)=>{
   console.log(req.params);
   res.send("users  page");
})
app.post('/',(req,res)=>
{
  console.log(req.body);
  res.send("this is post operation ");
})
app.post("/create",(req,res)=>{
    console.log(req.body);
    res.send({message:"Post working"});
})
// app.get('/todo',async (req,res)=>{
//   try{const result= await axios.get("https://jsonplaceholder.typicode.com/todos")
//   console.log("result");
//  res.send(result.data);
//   //res.send({messg:result})
// }
// catch(err){
//   res.send("cannot fetch the data ......");
// }
  
// })

// app.get('/weather',async (req,res)=>{
//   const city = req.query.city
//   const state = req.query.state
//   try{
    
//   const result= await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+","+state+"&appid=6034df89d5216dd5dc6587d775c9c373")
//   console.log("result");
//  res.send(result.data);
//   //res.send({messg:result})
// }
// catch(err){
//   res.send("cannot fetch the data ......");
//   res.status(500)
// }
  
// })
/*app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})*/

app.use('/todo',todoRouter);
app.use('/weather',weatherRouter);
app.use('/posts',postsRouter);
app.use('/comments',commentsRouter);
app.use('/albums',albumsRouter);
app.use('/photos',photosRouter);
app.use('/users',usersRouter);
app.use('/user',UserRouter);
app.use('/customer',CustomerRouter);
app.listen(3000)


//   