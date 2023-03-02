import { Request, Response } from 'express'
import { createClient, findClients, findOneClient, findOneAndUpdateClient, deleteOneClient } from '@services/client.service'
import { handlesHttp } from '@utils/error.handle'

/**
 * Funcion que permite recibir el ID del Cliente a buscar 
 * @param params ID del Cliente 
 * @param res datos del Cliente
 */
const getClient = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const responseClient = await findOneClient(id)
        res.send(responseClient)
    } catch (error) {
        handlesHttp(res, error?.status || 500, 'ERROR_GET_DOCTOR')
    }
}

/**
 * Funcion que permite traer las lista de todos los Clientes
 * @param res datos del Cliente
 */
const getClients = async (req: Request, res: Response) => {
    try {
        const responseClient = await findClients()
        res.send(responseClient)
    } catch (error) {
        handlesHttp(res, error?.status || 500, 'ERROR_GET_DOCTORS')
    }
}

/**
 * Funcion que permite actualizar un Cliente con base en el ID
 * @param params ID del Client y el resto de informacion para actualizar
 * @param res JSON con la informacion actualizada
 */
const updateClient = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params
        const responseClient = await findOneAndUpdateClient(id, body)
        res.send({ status: 'OK', data: responseClient })
    } catch (error) {
        handlesHttp(res, error?.status || 500, 'ERROR_UPDATE_DOCTOR')
    }
}

/**
 * Funcion que permite crear una nuevo Cliente
 * @param body Informacion del Client que se va a crear
 * @param res JSON con la informacion del Cliente que se creó
 */
const postClient = async ({ body }: Request, res: Response) => {
    try {
        const responseClient = await createClient(body)
        res.status(201).json({ status: 'OK', data: responseClient })
    } catch (error) {
        handlesHttp(res, error?.status || 500, 'ERROR_POST_DOCTOR')
    }
}

/**
 * Funcion que permite eliminar un Cliente con base en el ID
 * @param params ID del doctor que se va a elimnar 
 * @param res JSON con { acknowledged, deletedCount } estado y cantidad de registros eliminados
 */
const deleteClient = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const responseClient = await deleteOneClient(id)
        res.send({ status: 'OK', data: responseClient })
    } catch (error) {
        handlesHttp(res, error?.status || 500, 'ERROR_DELETE_DOCTOR')
    }
}

export { getClient, getClients, updateClient, postClient, deleteClient }