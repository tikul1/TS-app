import mongoose,{ connect } from "mongoose";
 
function  connects() {
    return connect('mongodb://localhost:27017/demo12')
    .then(() => {console.log("db connected")})
    .catch(()=> {console.log("error")}) 
}

export { connects};