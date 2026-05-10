import { Request, Response } from "express";
import UserModel from "../models/user.model";
import BcryptVal from "../utils/bcrypt";

type TLogin= {
    identifier: string;
    password: string;
}

type TRegister= {
    name: string;
    username: string;
    email: string;
    password: string;
}

type TActivation={
    code: string
}


export default {
    async login(req: Request, res: Response) {
        const {identifier, password} = req.body as unknown as TLogin
        try{
            const userByIdentifier = await UserModel.findOne({
                $or: [ 
                    {
                        email: identifier
                    },
                    {
                        username: identifier
                    }
                ]
            })

            if(!userByIdentifier){
                return res.status(404).json({
                    message:"User Not Found",
                    data: null
                })
            }
            if(!userByIdentifier.is_active){
                return res.status(400).json({
                    message:"Please Activated your Account",
                    data: null
                })
            }
            
            const validPassword = await BcryptVal.comparePassword(password, userByIdentifier.password)
            
            if(!validPassword){
                return res.status(400).json({
                    message:"Password Incorrect",
                    data: null
                })
            }

            return res.status(200).json({
                message:`Welcome ${userByIdentifier.name}`,
                data: userByIdentifier
            })

        }catch(error){
            return res.status(500).json({
                message:"Terjadi Kesalahan Pada Server",
                data: error
            })
        }
    },
    async register(req: Request, res: Response) {
        
        try{
            const createUser = await UserModel.create(req.body)

            if(!createUser){
                return res.status(400).json({
                    message:"Please input correctly",
                    data: null
                })
            }

            if(createUser){
                return res.status(200).json({
                    message:`Registrasi Berhasil hai ${createUser.name}` ,
                    data:createUser
                })
            }


        }catch(error){
            return res.status(500).json({
                message:"Terjadi Kesalahan Pada Server",
                data: error
            })
        }
    },
    async activationAccount (req: Request, res: Response) {

        try{
            const {code} = req.body as unknown as TActivation;
            if(!code){
                return res.status(404).json({
                    message:"pls input activation code",
                    data: null
                })
            }
            const userByActivationCode = await UserModel.findOne({
                activation_code: code
            })
            if (!userByActivationCode){
                return res.status(404).json({
                    message:"Activation Code Not Found",
                    data: null
                })
            }

            userByActivationCode.is_active = true
            userByActivationCode.activation_code = ""

            await userByActivationCode.save()

            return res.status(200).json({
                message:"Succesfully Activation your Account",
                data: userByActivationCode
            })
            
            

        }catch(error){
            return res.status(500).json({
                message:"Cannot Activate your Account",
                data: error
            })
        }
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