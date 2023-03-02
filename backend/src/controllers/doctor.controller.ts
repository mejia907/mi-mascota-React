import { Request, Response } from 'express'
import { createDoctor, findDoctors, findOneDoctor, findOneAndUpdateDoctor, deleteOneDoctor } from '@services/doctor.service'
import { handlesHttp } from '@utils/error.handle'

/**
 * Funcion que permite recibir el ID del Doctor a buscar 
 * @param params ID del Doctor 
 * @param res datos del Doctor
 */
const getDoctor = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const responseDoctor = await findOneDoctor(id)
        res.send(responseDoctor)
    } catch (error) {
        handlesHttp(res, error?.status || 500, 'ERROR_GET_DOCTOR')
    }
}

/**
 * Funcion que permite traer las lista de todos los Doctores
 * @param res datos del Doctor
 */
const getDoctors = async (req: Request, res: Response) => {
    try {
        const responseDoctor = await findDoctors()
        res.send(responseDoctor)
    } catch (error) {
        handlesHttp(res, error?.status || 500, 'ERROR_GET_DOCTORS')
    }
}

/**
 * Funcion que permite actualizar un Doctor con base en el ID
 * @param params ID del Doctor y el resto de informacion para actualizar
 * @param res JSON con la informacion actualizada
 */
const updateDoctor = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params
        const responseDoctor = await findOneAndUpdateDoctor(id, body)
        res.send({ status: 'OK', data: responseDoctor })
    } catch (error) {
        handlesHttp(res, error?.status || 500, 'ERROR_UPDATE_DOCTOR')
    }
}

/**
 * Funcion que permite crear una nuevo Doctor
 * @param body Informacion del Doctor que se va a crear
 * @param res JSON con la informacion del Doctor que se creó
 */
const postDoctor = async ({ body }: Request, res: Response) => {
    try {
        const responseDoctor = await createDoctor(body)
        res.status(201).json({ status: 'OK', data: responseDoctor })
    } catch (error) {
        handlesHttp(res, error?.status || 500, 'ERROR_POST_DOCTOR')
    }
}

/**
 * Funcion que permite eliminar un Doctor con base en el ID
 * @param params ID del doctor que se va a elimnar 
 * @param res JSON con { acknowledged, deletedCount } estado y cantidad de registros eliminados
 */
const deleteDoctor = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const responseDoctor = await deleteOneDoctor(id)
        res.send({ status: 'OK', data: responseDoctor })
    } catch (error) {
        handlesHttp(res, error?.status || 500, 'ERROR_DELETE_DOCTOR')
    }
}

export { getDoctor, getDoctors, updateDoctor, postDoctor, deleteDoctor }