import { Response } from 'express';

const handlesHttp = (res: Response, sta: number, error: string)=>{
    res.status(+sta);
    res.send({ error });
}

export { handlesHttp }