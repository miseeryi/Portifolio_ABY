import dotenv from "dotenv"

dotenv.config();

export const MONGO_URI:string = process.env.MONGO_URI as unknown as string
export const PORT:number = process.env.PORT as unknown as number
export const SECRET_KEY:string = process.env.SECRET_KEY as unknown as string