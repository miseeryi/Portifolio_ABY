import express from 'express'
import authController from '../controllers/auth.controller';

const authRoute = express.Router()

authRoute.post("/login", authController.login) // post
authRoute.post("/register", authController.register) // post
authRoute.get("/me", authController.me) // get
authRoute.post("/reset_password", authController.reset_password) // post
authRoute.post("/asking_reset_password", authController.asking_reset_password) // post


export default authRoute;