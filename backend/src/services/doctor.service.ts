import { Doctor } from "../interfaces/doctor.interface"
import DoctorModel from "../models/doctor.model"

/**
 * Funcion que permite crear un nuevo registro
 * @param doctor interfaz 
 * @returns JSON con el registro creado
 */
const createDoctor = async (doctor: Doctor) => {
    const reponseInsert = await DoctorModel.create(doctor)
    return reponseInsert
}

/**
 * Funcion que permite buscar todos los registros 
 * @returns JSON con lista de Doctores
 */
const findDoctors = async () => {
    const responseDoctor = await DoctorModel.find({})
    return responseDoctor
}

/**
 * Funcion que permite buscar por ID
 * @param id del Doctor
 * @returns JSON con el registro encontrado
 */
const findOneDoctor = async (id: string) => {
    const responseDoctor = await DoctorModel.findOne({ _id: id })
    return responseDoctor
}

/**
 * Funcionr que permite actualizar los registros por ID
 * @param id del Doctor
 * @param data que se va actualizar
 * @returns JSON con el registro actualizado
 */
const findOneAndUpdateDoctor = async (id: string, data: Doctor) => {
    const responseDoctor = await DoctorModel.findOneAndUpdate({ _id: id }, data, {
        new: true, //Permite retornar el objeto ya actualizado o sino retornaria el objeto antes de actualizar
    })
    return responseDoctor
}

/**
 * Funcion que permite eliminar un registro con base en el ID
 * @param id del Doctor
 * @returns JSON con la respuesta de Mongo
 */
const deleteOneDoctor = async (id: string) => {
    const responseDoctor = await DoctorModel.deleteOne({ _id: id })
    return responseDoctor
}


export { createDoctor, findDoctors, findOneDoctor, findOneAndUpdateDoctor, deleteOneDoctor }