import  express  from "express";
import dummyController from "../controllers/dummy.controller";

const dummyRoutes = express.Router()

dummyRoutes.get("/dummy", dummyController.dummy)
dummyRoutes.get("/odi", dummyController.odi)
dummyRoutes.get("/kontakAby", dummyController.kontakAby)

export default dummyRoutes;