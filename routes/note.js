const express=require('express')

const { createnote, getallnote}=require("../handlers/note")

const auth=require("./auth")

const noterouter=express.Router()

noterouter.get("/note/all",getallnote)
noterouter.post("/note",auth,createnote)

module.exports=noterouter