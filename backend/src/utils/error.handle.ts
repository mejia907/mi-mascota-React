import { Response } from "express";

const handlesHttp = (res: Response, error: string)=>{
    res.status(500);
    res.send({error})
}

export { handlesHttp }