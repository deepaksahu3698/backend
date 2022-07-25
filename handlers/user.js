const userDB=require("../database/user")
const { use } = require("../routes/user")

const jwt = require('jsonwebtoken');

require('dotenv').config()

const SECRET = process.env.SECRET

async function registeruser(req,res){

    const user =req.body

    let checkexitornot=await userDB.findOne({
        email:use.email
    })

    if(checkexitornot){
        return res.status(400).send({
            error: "User already exists"
        })
    }

let userone=await userDB.create(user)
userone=userone.toJSON()
// console.log(user)
return res.send({
   user:userone
    
})

}

async function login(req,res){

    let {email,password}=req.body

    let user=await userDB.findOne({
        email:email
    },{
        password:1,
        _id: 1,
        email: 1,
        name: 1,
    }
)

    if(user){
        if(user.password===password){
            let enctoken=jwt.sign({
                id:user._id,
                email:user.email,
                password:user.password

            },SECRET)

return res.send({

    data:{
        token:enctoken
    }
})
        }
    }
}

async function getloginuser(req,res,next){

    const {context}=req

    if (!context.user) {
        return res.status(400).send({
            error: "Token is invalide"
        })
    } else {
        return res.send({
            data: context.user
        })
    }
}

module.exports={
    registeruser,
    login,
    getloginuser
}