import mongoose from "mongoose"

let isConncected = false;

export const connectToDB = async() =>{
    mongoose.set("strictQuery", true);

    if(isConncected){
        console.log("mongoDB is already connected")
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConncected = true
        console.log("MongoDB connected")
    } catch (error) {
       console.log(error) 
    }
}