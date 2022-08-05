import  express,{Request, Response} from "express";
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
    const addUser = await createUser({name: req.body.name, age: req.body.age, email: req.body.email, 
        bio: req.body.bio, hobbies: req.body.bio
    }) 
    res.json({added_user: addUser})
 }
// >> Update <<

export const updateUserById = async(req: Request, res: Response) => {
    const updatedUser = await updateUser({id: req.query.id}, {name: req.body.name, age:req.body.age}, {new:true})
    res.json({update_user: updatedUser})
}

// >> Delete <<

export const delteById = async( req: Request, res: Response) => {
    const deletedUser = await  deleteUser({id: req.query.id})
    res.json({msg: "User delete successsfullly!!"})
}