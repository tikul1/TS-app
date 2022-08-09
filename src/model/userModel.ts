import  {Schema, model, Types, Document } from "mongoose";
import mongoose from "../db/db";
// // documentarray's interface
export interface hobbiesI extends Document{
    hName: number
}
//this interface is for model
export interface UserInterface extends hobbiesI, Document {
    name:string,
    age:number,
    email:string,                                    // optional field
    bio: Types.Array<number>,                           // optiona array of string
    hobbies: Types.DocumentArray<hobbiesI>,
}
// const userSchema : Schema = new Schema({
//     name: {
//         type: String,
//     },
//     age: {
//         type: Number
//     },
//     email: {
//         type: String
//     },
//     bio: [String],
//     hobbies: [{hName: String}]
// })
// const UserModel = model<UserInterface >("User",userSchema )

type userType = UserInterface & Document;
const UserModel  = mongoose.model<userType>('User', new mongoose.Schema({
    name: {
                type: String,
            },
            age: {
                type: Number
            },
            email: {
                type: String
            },
            bio: [Number],
            hobbies: [{hName: Number}]
}))
export default UserModel