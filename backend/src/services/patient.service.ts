import { Patient } from '@interfaces/patient.interface'
import PatientModel from '@models/patient.model'

/**
 * Funcion que permite crear un nuevo registro
 * @param patient interfaz
 * @returns JSON con el registro creado
 */
const createPatient = async (patient: Patient): Promise<Patient> => {
  const reponseInsert = await PatientModel.create(patient)
  return reponseInsert
}

/**
 * Funcion que permite buscar todos los registros 
 * @returns JSON con lista de Pacientes
 */
const findPatients = async () => {
  const responsePatient = await PatientModel.find({}).sort({_id: -1})
  return responsePatient
}

/**
 * Funcion que permite buscar por ID
 * @param id del Paciente
 * @returns JSON con el registro encontrado
 */
const findOnePatient = async (id: string) => {
  const responsePatient = await PatientModel.findOne({ _id: id }).populate({path:'patients', select: '_id name species'})
  return responsePatient
}

/**
 * Funcionr que permite actualizar los registros por ID
 * @param id del Paciente
 * @param data que se va actualizar
 * @returns JSON con el registro actualizado
 */
const findOneAndUpdatePatient = async (id: string, data: Patient) => {
  const responsePatient = await PatientModel.findOneAndUpdate({ _id: id }, data, {
    new: true, //Permite retornar el objeto ya actualizado o sino retornaria el objeto antes de actualizar
  })
  return responsePatient
}

/**
 * Funcion que permite eliminar un registro con base en el ID
 * @param id del Paciente
 * @returns JSON con la respuesta de Mongo
 */
const deleteOnePatient = async (id: string) => {
  const responsePatient = await PatientModel.deleteOne({ _id: id })
  return responsePatient
}

export { createPatient, findPatients, findOnePatient, findOneAndUpdatePatient, deleteOnePatient }