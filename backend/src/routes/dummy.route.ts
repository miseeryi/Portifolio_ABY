import  express  from "express";
import dummyController from "../controllers/dummy.controller";

const dummyRoutes = express.Router()

dummyRoutes.get("/", dummyController.dummy)
dummyRoutes.get("/odi", dummyController.odi)
dummyRoutes.get("/kontak_aby", dummyController.kontak_aby)

export default dummyRoutes;