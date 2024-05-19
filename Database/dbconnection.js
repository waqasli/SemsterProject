import mongoose, { Mongoose } from "mongoose";

const dbconnection =() =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"Restaurant", 
    })
    .then(()=>{
        console.log("Database connected");
    })
    .catch((err)=>{
        console.log(err);
    })
    
}