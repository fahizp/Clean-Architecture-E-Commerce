import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://fahiz:fahiz123@cluster0.movezpo.mongodb.net/auth");
    console.log(`Database connected successfully`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
