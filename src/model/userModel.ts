import {Schema, model, Document } from "mongoose";


//this interface is for services

export interface UserDocument extends Document {
    name: string,
    age: number, 
}


//this interface is for model
interface User {
    name:string,
    age:number,

}
const userSchema = new Schema<User>({
    name: {
        type: String,
        
    },
    age: {
        type: Number
    }
})

const UserModel = model<User>("User",userSchema )
export default UserModel