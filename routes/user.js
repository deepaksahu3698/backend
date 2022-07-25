const express= require("express")

const {registeruser,login,getloginuser} = require("../handlers/user")
const auth=require("./auth")
const userrouter=express.Router()

userrouter.post("/usersdata",registeruser)
userrouter.post("/usersdata/login",login)

userrouter.get("/usersdata/getlogin",auth,getloginuser)


module.exports=userrouter
