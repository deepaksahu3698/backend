const notedb=require("../database/note")

async function createnote(req, res, next) {
    let { note } = req.body;
    const { user } = req.context

    note.user = user._id;
    // console.log(user)

    note = await notedb.create(note);

    return res.send({
        data: note
    })
}

async function getallnote(req,res){
    const {skip, limit, user} = req.query;

    const search = {}

    // dynamically add filters
    if (user) {
        search.user = user;
    }

    const note = await notedb.find()

    return res.send({
        data: note
    })

}

module.exports={

    createnote,
    getallnote
}