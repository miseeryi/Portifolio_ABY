import express, { type Request, type Response } from "express";
import routes from "./routes";

const app = express();

app.use("/", routes);

app.get("/", (req: Request, res: Response): Response => {
    return res.status(200).json({
        "message": "server berlari",
        "data": "null"
    })
})

app.listen(3000, () : void => {
    console.log(`SERVER SEDANG BERJALAN DI http://localhost:3000`)
})