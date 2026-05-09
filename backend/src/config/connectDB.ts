import mongoose from "mongoose";
import { MONGO_URI } from "../utils/env";

async function connectDB(){
    try{
        await mongoose.connect(MONGO_URI, {
            dbName: "alfa_portofolio"
        })

        console.log(`[DATABASE] Server Connected to Database`)
    }catch (error){
        console.log(`[DATABASE] Error Ocurred: ${error}`)
    }
}

export default connectDB