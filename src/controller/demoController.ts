import  express,{Request, Response} from "express";

export const demo = (req:Request, res:Response):void => {
    res.send("router testing")
}