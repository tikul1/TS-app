import  express,{Request, Response} from "express";
import User, {UserInterface, hobbiesI} from '../model/userModel'

// import {createUser, findUser, updateUser, deleteUser} from "../services/userService"

//find without creating services

export const listUser = async (req:Request, res:Response): Promise<void> => {
    try{
        const users: UserInterface[] = await User.find({})
        res.json({users_are: users})
    }
    catch(err) {
        res.status(401).json({Error: err})
    }
}

//create without creating services

export const newUser = async (req:Request, res:Response): Promise<void> => {
    try{
        const data = req.body as Pick<UserInterface, "name" | "age" | "email" | "hobbies" | "bio" >
        const userData: UserInterface = new User({
            name: data.name,
            age: data.age,
            email: data.email,
            hobbies: data.hobbies,
            bio: data.bio
        })
        const newUser: UserInterface = await userData.save();
        res.json({users_added: newUser})
    }
    catch (err){
        res.status(401).json({Error: err})
    }
}

//update without creating services

export const updateUserById = async (req:Request, res:Response): Promise<void> => {
    try{
        const {
            params: {id},
            body
        } = req
        const updateUser: UserInterface | null = await User.findByIdAndUpdate(
            { _id: id },
            body
          )
        res.json({updated_user: updateUser})
    }
    catch (err){
        res.status(401).json({Error: err})
    }
}
//delete without creating services

export const delteById = async (req:Request, res:Response): Promise<void> => {
    try{
        const deletedUser: UserInterface | null = await User.findByIdAndRemove(
            req.params.id
          )
        res.json({delete_user: deletedUser})
    }
    catch (err){
        res.status(401).json({Error: err})
    }
}



//CRUD with the help of services
// >> Find  <<
// export const listUser = async (req:Request, res:Response) => {
//     const users = await findUser({})
//     res.json({users_are: users})
// }

// // >> Add <<
//  export const newUser = async( req: Request, res: Response) => {
//     const addUser = await createUser({name: req.body.name, age: req.body.age, email: req.body.email, 
//         bio: req.body.bio, hobbies: req.body.hobbies
//     }) 
//     res.json({added_user: addUser})
//  }
// // >> Update <<

// export const updateUserById = async(req: Request, res: Response) => {
//     const updatedUser = await updateUser({id: req.query.id}, {name: req.body.name, age:req.body.age}, {new:true})
//     res.json({update_user: updatedUser})
// }

// // >> Delete <<

// export const delteById = async( req: Request, res: Response) => {
//     const deletedUser = await  deleteUser({id: req.query.id})
//     res.json({msg: "User delete successsfullly!!"})
// }