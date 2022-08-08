import  express from "express";
import { demo }from '../controller/demoController'
import { listUser, newUser,updateUserById, delteById } from "../controller/userController";
const router = express.Router();

// router.get("/demo", demo);
router.get("/list",listUser );
router.post("/user", newUser)
router.put("/updateuser/:id", updateUserById) 
router.delete("/delete/:id", delteById) 

export { router}