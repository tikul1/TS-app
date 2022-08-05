import {Schema, model } from "mongoose";

//this interface is for model
export interface UserInterface {
    name:string,
    age:number,
    email?:string                                    // optional field
}
const userSchema = new Schema<UserInterface>({
    name: {
        type: String,
        
    },
    age: {
        type: Number
    },
    email: {
        type: String
    }
})
const UserModel = model<UserInterface>("User",userSchema )
export default UserModel