import  express from "express";  //app
import { router }from "./routes/routes";
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use('/', router)

const PORT : number = 8090;
app.listen(PORT, ():void => console.log(`Server running on : ${PORT}`)
)
