import express  from "express"
import dummyRoutes from "./dummy.route"
import authRoute from "./auth.route"

const routes = express.Router()

routes.use("/dummy", dummyRoutes)
routes.use("/auth", authRoute)

export default routes