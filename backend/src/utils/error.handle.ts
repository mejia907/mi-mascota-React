import { Response } from 'express';

const handlesHttp = (res: Response, sta: number, msj: string)=>{
    res.status(+sta).json({
        error: msj
    })
    //res.send({ msj });
}

export { handlesHttp }