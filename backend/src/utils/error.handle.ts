import { Response } from 'express';

const handlesHttp = (res: Response, sta: number, msj: string)=>{
    res.status(+sta).json({
        status: 'FAILED',
        error: msj
    })
}

export { handlesHttp }