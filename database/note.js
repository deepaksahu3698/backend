const mongoose =require ("mongoose")


const noteSchema=new mongoose.Schema({

    Title:String,
    Note:String,
    Label:String,
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
})

const notedb=mongoose.model("Note",noteSchema)

module.exports=notedb