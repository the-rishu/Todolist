import mongoose from 'mongoose';



//Using async await
const connectDB = async (DATABASE_URI) =>{
    try {
        const DB_OPTIONS = {
            dbName:'crud',
        }
        await mongoose.connect(DATABASE_URI,DB_OPTIONS);
        console.log("Connected Sucessfully crud ");
    } catch (err) {
        console.log(err);
    }
} 

export default connectDB