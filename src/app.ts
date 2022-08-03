import  express,{Request, Response} from "express";

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/test", (req: Request, res:Response):void => {
    res.json({msg: "test working!!!!"});
});

const PORT : number = 8080;
app.listen(PORT, ():void => console.log(`Server running on : ${PORT}`)
)
