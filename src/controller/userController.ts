import  express,{Request, Response} from "express";
import  User  from "../model/userModel";




export const listUser = async (req:Request, res:Response) => {
    const users = await User.find({})
    res.json({users_are: users})
}

// export const createUSer = async(req:Request, res:Response) => {

//     const newUser = await userModel.create({})
// }