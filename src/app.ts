import  express, { application, Application } from "express";  //app
import { router }from "./routes/routes";
const app: Application = express();

app.use(express.json( 
  {
    limit : '10mb',                //req.body max size controll
    inflate: true,                //handles deflated body(compressed) //default
    strict: true,                 //handles only array and object  //default
    type: "application/json"      //type of media type //default
}
  )); 
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use('/', router)

const PORT : number = 8090;
app.listen(PORT, ():void => console.log(`Server running on : ${PORT}`)
)
