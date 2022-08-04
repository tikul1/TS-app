import  express,{Request, Response} from "express";
import { demo }from '../controller/demoController'
import { newUser,listUser } from "../controller/userController";
const router = express.Router();
 

router.get("/demo", demo);
router.get("/list",listUser );
router.post("/user", newUser) 


export { router}