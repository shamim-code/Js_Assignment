require('dotenv').config();

const mongoose = require('mongoose');

const app = require('./app');


const connection = async () => {
    try {

        await mongoose.connect("mongodb://127.0.0.1:27017/StudentAssignment");
        console.log("Database connection established..");
        
    } catch (error) {

        console.log(error.message);
        
    }
}


app.listen(process.env.PORT, async() => {
    await connection();
    console.log("listening on port " + process.env.PORT);
})