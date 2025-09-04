import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://abhishek:7782036508@cluster0.j5cr9tm.mongodb.net/food-delivery?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("✅ Database connected");
  } catch (err) {
    console.error("❌ DB connection error:", err.message);
  }
};
