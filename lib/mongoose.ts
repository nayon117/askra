import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.error("MONGODB_URL is not defined in environment variables");
  }

  if (isConnected) {
    return console.log("Already connected to database");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "askra",
    });
    isConnected = true;
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};
