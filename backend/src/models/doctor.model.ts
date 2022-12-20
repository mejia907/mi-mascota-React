import { Schema, Types, model, Model } from "mongoose";
import { Doctor } from "../interfaces/doctor.interface";

const DoctorSchema = new Schema<Doctor>(
    {
        document: {
            type: String,
            required: true,
        },
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
        },
        mobile: {
            type: Number,
            required: true,
        },
        birthdate: {
            type: Date,
        },
        card: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true, //Permite generar en el mongo la fecha de actualizacion y creacion
        versionKey: false, //Quitar el versionamiento de los datos
    }
)

const DoctorModel = model('doctor', DoctorSchema)
export default DoctorModel