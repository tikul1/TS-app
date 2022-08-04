import  express,{Request, Response} from "express";
import { demo }from '../controller/demoController'
import { listUser } from "../controller/userController";
const router = express.Router();
 

router.get("/demo", demo);
router.get("/user", listUser) 


export { router}