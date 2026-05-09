import dotenv from "dotenv"

dotenv.config();

export const MONGO_URI:string = process.env.MONGO_URI as unknown as string
export const PORT:number = process.env.PORT as unknown as number