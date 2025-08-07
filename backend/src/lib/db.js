import mongoose from "mongoose";
export const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MongoDB: ${conn.connection.host} ${conn.connection.port} ${conn.connection.name}  ${conn.connection.db.databaseName}`);
    } catch (error) {
        console.log("Error connecting to MongoDB",error);
    }
}