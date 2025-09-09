import mongoose from "mongoose";
import 'dotenv/config';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected Successfully");
  } catch (error) {
    console.error("DB Connection Failed:", error);
    process.exit(1); // Optional: exit the process if the DB connection fails
  }
}
// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.