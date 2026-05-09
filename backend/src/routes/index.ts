import express  from "express"
import dummyController from "../controllers/dummy.controller"

const routes = express.Router()

routes.get("/dummy", dummyController.dummy)
routes.get("/odi", dummyController.odi)

export default routes