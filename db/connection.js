import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

const MONGO = process.env.MONGO_URI;

mongoose.set("returnOriginal", false);

mongoose.connect(MONGO).catch((err) => {
  console.log(`Error connection go MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;
