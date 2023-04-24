import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        const connectionString = process.env.MONGO_URL 
        const conn = await mongoose.connect(connectionString);

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;