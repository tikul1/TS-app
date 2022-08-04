import  express,{Request, Response} from "express";
import  userModel  from "../model/userModel";




export const listUser = async (req:Request, res:Response) => {
    const users = await userModel.find({})
    res.json({users_are: users})
}