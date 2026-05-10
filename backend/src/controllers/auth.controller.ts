import { Request, Response } from "express";

export default {
    login(req: Request, res: Response) {
        return res.status(200).json({
            message:"Login",
            data:"null"
        })
    },
    register(req: Request, res: Response) {
        return res.status(200).json({
            message:"register",
            data:"null"
        })
    },
    me(req: Request, res: Response) {
        return res.status(200).json({
            message:"Personal",
            data:"null"
        })
    },
    reset_password(req: Request, res: Response) {
        return res.status(200).json({
            message:"Reset Password",
            data:"null"
        })
    },
    asking_reset_password(req: Request, res: Response) {
        return res.status(200).json({
            message:"asking reset pass",
            data:"null"
        })
    }
}