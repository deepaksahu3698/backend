const mongoose = require('mongoose')

async function connecttoDatabase() {
    const dbUri = "mongodb://localhost:27017/Note"


    try {
        await mongoose.connect(dbUri)

        console.log('Connected to Database');
    } catch (error) {
        
    console.log("error")
    }
}

module.exports = connecttoDatabase;