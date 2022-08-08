import {Schema, model, Types, Document } from "mongoose";
// // documentarray's interface
export interface hobbiesI {
    // _id: Types.ObjectId,
    hName: string
}
//this interface is for model
export interface UserInterface extends Document {
    name:string;
    age:number;
    email:string;                                    // optional field
    bio: Types.Array<string>;                           // optiona array of string
    hobbies: Types.DocumentArray<hobbiesI>;
}
const userSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    bio: [String],
    hobbies: [{hName: String}]
})

// type User = InferSchemaType<typeof userSchema>;

const UserModel = model<UserInterface>("User",userSchema )
export default UserModel