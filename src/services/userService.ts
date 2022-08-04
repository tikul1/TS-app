import {DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions} from 'mongoose';
import User, {UserDocument} from '../model/userModel'


//for creating
export function createUser(input:DocumentDefinition <UserDocument>){
    return User.create(input)
}

//for find

export function findUser(query: FilterQuery<UserDocument>,  options: QueryOptions={lean:true}) {
    return User.find(query, {}, options);
}
//for findUpdate

export function updateUser(
    query: FilterQuery<UserDocument>,
    update:UpdateQuery<UserDocument>,
    options: QueryOptions
    ){
        return User.findOneAndUpdate(query, update, options)
    }

    //for delete
export function deleteUser(query: FilterQuery<UserDocument>){
    return User.deleteOne(query)
}
