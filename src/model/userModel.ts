import {Schema, model, Types } from "mongoose";

// documentarray's interface
interface hobbiesI {
    // _id: Types.ObjectId,
    hName: number
}
//this interface is for model
export interface UserInterface {
    name:string;
    age:number;
    email:string;                                    // optional field
    bio?: Types.Array<number>;                           // optiona array of string
    hobbies?: Types.DocumentArray<hobbiesI>;
}
const userSchema = new Schema<UserInterface >({
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
    hobbies: [{hName: String}]
})
const UserModel = model<UserInterface>("User",userSchema )
export default UserModel