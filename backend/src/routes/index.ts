import express  from "express"
import dummyRoutes from "./dummy.route"

const routes = express.Router()

routes.use("/dummy", dummyRoutes)

export default routes