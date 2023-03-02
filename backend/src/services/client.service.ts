import { Client } from '@interfaces/client.interface'
import ClientModel from '@models/client.model'

/**
 * Funcion que permite crear un nuevo registro
 * @param client interfaz
 * @returns JSON con el registro creado
 */
const createClient = async (client: Client): Promise<Client> => {
  const reponseInsert = await ClientModel.create(client)
  return reponseInsert
}

/**
 * Funcion que permite buscar todos los registros 
 * @returns JSON con lista de Clientes
 */
const findClients = async () => {
  const responseClient = await ClientModel.find({}).sort({_id: -1}) 
  return responseClient
}

/**
 * Funcion que permite buscar por ID
 * @param id del Client
 * @returns JSON con el registro encontrado
 */
const findOneClient = async (id: string) => {
  const responseClient = await ClientModel.findOne({ _id: id })
  return responseClient
}

/**
 * Funcionr que permite actualizar los registros por ID
 * @param id del Cliente
 * @param data que se va actualizar
 * @returns JSON con el registro actualizado
 */
const findOneAndUpdateClient = async (id: string, data: Client) => {
  const responseClient = await ClientModel.findOneAndUpdate({ _id: id }, data, {
    new: true, //Permite retornar el objeto ya actualizado o sino retornaria el objeto antes de actualizar
  })
  return responseClient
}

/**
 * Funcion que permite eliminar un registro con base en el ID
 * @param id del Cliente
 * @returns JSON con la respuesta de Mongo
 */
const deleteOneClient = async (id: string) => {
  const responseClient = await ClientModel.deleteOne({ _id: id })
  return responseClient
}

export { createClient, findClients, findOneClient, findOneAndUpdateClient, deleteOneClient }