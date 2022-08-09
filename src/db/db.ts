import mongoose from "mongoose"; 
 mongoose.connect('mongodb://localhost:27017/demo12')
    .then(() => {console.log("db connected")})
    .catch(()=> {console.log("error")}) 


export default mongoose;