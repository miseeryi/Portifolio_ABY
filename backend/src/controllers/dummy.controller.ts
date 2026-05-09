import { Request, Response } from "express";

export default {
    dummy(req: Request, res: Response){
        return res.status(200).json({
            message: "Hit Dummy Success",
            data: null
        })
    }
}