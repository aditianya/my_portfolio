import mongoose from "mongoose";
import dns from "dns";

// Fix Windows DNS resolution issue for MongoDB SRV records
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("✅ MongoDB Connected");

    } catch (error) {

        console.log("❌ MongoDB Connection Failed");

        console.log(error.message);

        process.exit(1);

    }
};

export default connectDB;