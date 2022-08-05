import  express from "express";
import { demo }from '../controller/demoController'
import { newUser,listUser, updateUserById, delteById } from "../controller/userController";
const router = express.Router();

router.get("/demo", demo);
router.get("/list",listUser );
router.post("/user", newUser)
router.put("/updateuser", updateUserById) 
router.delete("/delete", delteById) 

export { router}