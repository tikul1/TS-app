import  express,{Request, Response} from "express";
import { demo }from '../controller/demoController'
const router = express.Router();


router.get("/demo", demo) 

export { router}