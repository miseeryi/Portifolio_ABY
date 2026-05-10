import express  from "express"
import dummyController from "../controllers/dummy.controller"
import authRoute from "./auth.route"

const routes = express.Router()

routes.use("/auth", authRoute)

routes.get("/dummy", dummyController.dummy)
routes.get("/odi", dummyController.odi)
routes.get("/kontakAby", dummyController.kontakAby)

export default routes