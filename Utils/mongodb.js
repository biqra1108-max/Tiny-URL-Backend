import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const ConnectMongoDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.error("MongoDB connection error:", err);
    }
}