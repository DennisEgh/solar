import mongoose from "mongoose";
let isConncected = false;
export const connectDB = async () => {


    mongoose.set("strictQuery", true);

    if(isConncected){
        console.log("mongoDB is already connected")
        return
    }



  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "user",
    });
    console.log("MongoDB Connected")
  } catch (error) {
    console.log(error)
  }
};
