const { mongoose } = require("mongoose");
let database;
const uri = process.env.MONGODB_CONNECTION_STRING;
const dbName = process.env.DB_NAME;

 async function connectToModgoDB() {
    try{
        await mongoose.connect(uri , {});
        console.log("Successfully Connected to MongoDb");
    } catch(err) {
         console.log("Unable to connect to MongoDb. Reason--", err.message);
    }    
}


module.exports = connectToModgoDB