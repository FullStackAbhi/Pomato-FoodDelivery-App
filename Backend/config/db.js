import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://abhishek:7782036508@cluster0.j5cr9tm.mongodb.net/food-delivery"
    )
    .then(() => console.log("db connected"));
};
