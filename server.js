//server creation
const express = require('express')
const mongoose = require('mongoose')
const registerRoute = require('./Routes/auth')
const dotenv = require('dotenv').config()
const port = process.env.PORT||3000
const app = express()


//Db connection
mongoose.connect(process.env.CONNECTION_STRING,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("db connected")
})
.catch((error)=>{
    console.log(error)
})


//middlewares
app.use(express.json())


//Auth Routes
app.use("/auth",registerRoute)


// start server
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});