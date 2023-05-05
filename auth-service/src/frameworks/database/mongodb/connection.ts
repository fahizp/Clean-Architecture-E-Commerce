import mongoose, { ConnectOptions } from "mongoose";
mongoose.set("strictQuery", true);
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log(`Database connected successfully`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
