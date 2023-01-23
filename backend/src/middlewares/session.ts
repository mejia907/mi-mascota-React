import { RequestExt } from "@interfaces/request.interface";
import { handlesHttp } from "@utils/error.handle";
import { verifyToken } from "@utils/jwt.handle";
import { NextFunction, Request, Response } from "express";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction ) =>{

  try{
    const jwtUser = req.headers.authorization || ''
    const jwt = jwtUser.split(' ').pop()
       
    const isValidUser = verifyToken(`${jwt}`)
    if(!isValidUser){      
      handlesHttp(res, 401, 'TOKEN_INVALID') 
    }else{
      req.user = isValidUser
      next()
    }

  }catch(e){
    handlesHttp(res, 400, 'SESSION_INVALID') 
  }
}

export { checkJwt }
