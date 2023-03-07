import { Request, Response } from 'express'
import { handlesHttp } from '@utils/error.handle'
import { createPatient, deleteOnePatient, findOneAndUpdatePatient, findOnePatient, findPatients } from '@services/patient.service'

/**
 * Funcion que permite recibir el ID del Patient a buscar 
 * @param params ID del Doctor 
 * @param res datos del Doctor
 */
const getPatient = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const responseDoctor = await findOnePatient(id)
        res.send(responseDoctor)    
    } catch (error) {
        handlesHttp(res, error?.status || 500, 'ERROR_GET_PATIENT')
    }
}

/**
 * Funcion que permite traer las lista de todos los Pacientes
 * @param res datos del Paciente
 */
const getPatients = async (req: Request, res: Response) => {
    try {
        const responsePatient = await findPatients()
        res.send(responsePatient)
    } catch (error) {
        handlesHttp(res, error?.status || 500, 'ERROR_GET_PATIENTS')
    }
}

/**
 * Funcion que permite actualizar un Paciente con base en el ID
 * @param params ID del Paciente y el resto de informacion para actualizar
 * @param res JSON con la informacion actualizada
 */
const updatePatient = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params
        const responsePatient = await findOneAndUpdatePatient(id, body)
        res.send({ status: 'OK', data: responsePatient })
    } catch (error) {
        handlesHttp(res, error?.status || 500, 'ERROR_UPDATE_PATIENT')
    }
}

/**
 * Funcion que permite crear una nuevo Paciente
 * @param body Informacion del Patient que se va a crear
 * @param res JSON con la informacion del Paciente que se creó
 */
const postPatient = async ({ body }: Request, res: Response) => {
    try {
        const responsePatient = await createPatient(body)
        res.status(201).json({ status: 'OK', data: responsePatient })
    } catch (error) {
        handlesHttp(res, error?.status || 500, 'ERROR_POST_PATIENT')
    }
}

/**
 * Funcion que permite eliminar un Paciente con base en el ID
 * @param params ID del Paciente que se va a elimnar 
 * @param res JSON con { acknowledged, deletedCount } estado y cantidad de registros eliminados
 */
const deletePatient = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const responsePatient = await deleteOnePatient(id)
        res.send({ status: 'OK', data: responsePatient })
    } catch (error) {
        handlesHttp(res, error?.status || 500, 'ERROR_DELETE_PATIENT')
    }
}

export { getPatient, getPatients, updatePatient, postPatient, deletePatient }