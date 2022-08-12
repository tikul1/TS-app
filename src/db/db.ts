import mongoose from "mongoose"; 
const mongooseOptions = {
    autoIndex: false,
    maxPoolSize: 10, // socket connection //by default it is 100
    minPoolSize: 3, // min socket connection //by default it is 100
    serverSelectionTimeoutMS: 5000,  //by default 30 sec //it will retry every 5 sec 
    socketTimeoutMS: 45000, // close socket after 45sec inactivity //By default 30sec
    family: 4 // ipv4 or ipv6 //by default v6 and if fails then v4
  };
 mongoose.connect('mongodb://localhost:27017/demo12', mongooseOptions)
    .then(() => {console.log("db connected")})
    .catch(()=> {console.log("error")}) 


export default mongoose;
