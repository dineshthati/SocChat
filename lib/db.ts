import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    console.log("Database connected");
    return true;
  } catch (error: any) {
    console.log(error.message);
    throw new error();
  }
};

export default connectDB;
