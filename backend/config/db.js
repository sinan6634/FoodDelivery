import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://smodi6634:AoYmNrefMtRavI9g@cluster0.aptwd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("DB connected!");
};
