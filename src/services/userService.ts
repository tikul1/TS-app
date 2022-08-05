import {DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions} from 'mongoose';
import User, {UserInterface} from '../model/userModel'
//for creating
export function createUser(input:DocumentDefinition <UserInterface>){
    return User.create(input)
}
//for find
export function findUser(query: FilterQuery<UserInterface>,  options: QueryOptions={lean:true}) {
    return User.find(query, {}, options);
}
//for findUpdate
export function updateUser(
    query: FilterQuery<UserInterface>,
    update:UpdateQuery<UserInterface>,
    options: QueryOptions
    ){
        return User.findOneAndUpdate(query, update, options)
    }
//for delete
export function deleteUser(query: FilterQuery<UserInterface>){
    return User.deleteOne(query)
}
