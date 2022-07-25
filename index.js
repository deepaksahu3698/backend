const express =require("express")
const connecttoDB=require("./database/index")
require('dotenv').config()
const userroute=require("./routes/user")
const noteroute=require("./routes/note")

const app=express()

app.use(express.json())

app.use(setcontext)

app.use(userroute)
app.use(noteroute)


function setcontext(req,res,next){
    req.context={

    }
    next()
}

const PORT = process.env.PORT
connecttoDB().then(()=>{
    app.listen(PORT,()=>{
        console.log('server is running at 3001 port')
  
    })
})