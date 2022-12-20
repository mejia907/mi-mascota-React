import { Request, Response } from "express"
import { handlesHttp } from "../utils/error.handle"

const getPatient = (req: Request, res: Response) => {
    try{

    }catch(e){
        handlesHttp(res, 'ERROR_GET_PATIENT')
    }
}

const getPatients = (req: Request, res: Response) => {
    try{

    }catch(e){
        handlesHttp(res, 'ERROR_GET_PATIENTS')
    }
}

const updatePatient = (req: Request, res: Response) => {
    try{

    }catch(e){
        handlesHttp(res, 'ERROR_UPDATE_PATIENT')
    }
}

const postPatient = ({body}: Request, res: Response) => {
    try{
        res.send(body)
    }catch(e){
        handlesHttp(res, 'ERROR_POST_PATIENT')
    }
}

const deletePatient = (req: Request, res: Response) => {
    try{

    }catch(e){
        handlesHttp(res, 'ERROR_DELETE_PATIENT')
    }
}

export { getPatient, getPatients, updatePatient, postPatient, deletePatient }