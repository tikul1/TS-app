import {Schema, model, Document } from "mongoose";

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