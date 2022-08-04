import  express,{Request, Response} from "express";
import  User  from "../model/userModel";
import {createUser, findUser, updateUser, deleteUser} from "../services/userService"

//find without creating services

// export const listUser = async (req:Request, res:Response) => {
//     const users = await User.find({})
//     res.json({users_are: users})
// }

//CRUD with the help of services

// >> Find  <<
export const listUser = async (req:Request, res:Response) => {
    const users = await findUser({})
    res.json({users_are: users})
}

// >> Add <<
 export const newUser = async( req: Request, res: Response) => {
    const addUser = await createUser({name: req.body.name, age: req.body.age}) 
    res.json({added_user: addUser})
 }
// >> Update <<