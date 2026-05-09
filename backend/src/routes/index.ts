import express  from "express"
import dummyController from "../controllers/dummy.controller"

const routes = express.Router()

routes.get("/dummy", dummyController.dummy)

export default routes