import mongoose from "mongoose";

let isConnected = false;

const connect = async () => {
    if (isConnected) {
        console.log("Already connected to MongoDB");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO);
        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw new Error("Connection failed!");
    }
};

mongoose.connection.on("disconnected", () => {
    isConnected = false;
    console.log("MongoDB connection disconnected");
});

export default connect;