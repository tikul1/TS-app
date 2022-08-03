import  express,{Request, Response} from "express";
import { router }from "./routes/routes";
import { connects } from "./db/db";
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

connects()
app.use('/', router)

// app.get("/test", (req: Request, res:Response):void => {
//     res.json({msg: "test working!!!!"});
// });

const PORT : number = 8080;
app.listen(PORT, ():void => console.log(`Server running on : ${PORT}`)
)
