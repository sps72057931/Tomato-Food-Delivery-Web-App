import dns from "dns";
import mongoose from "mongoose";

// Change DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected"));
};