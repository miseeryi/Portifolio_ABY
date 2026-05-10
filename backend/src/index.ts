import express, { type Request, type Response } from "express";
import routes from "./routes";
import connectDB from "./config/connectDB";
import { PORT } from "./utils/env";


async function init(){
    try{
        const app = express();
        
        await connectDB()
        app.use(express.json())
        app.use("/", routes);
        
        app.get("/", (req: Request, res: Response): Response => {
            return res.status(200).json({
                "message": "server berlari",
                "data": "null"
            })
        })

        app.listen(PORT, () : void => {
            console.log(`[SERVER] Server is running at http://localhost:${PORT} `)
        })
    }catch (error){
        console.log(`[Server] Error Ocurred: ${error}`)
    }
}

init()
