import { Schema, Types, model, Model } from "mongoose";
import { Patient } from "@interfaces/patient.interface";

const PatientSchema = new Schema<Patient>(
    {
        name:{
            type: String,
            required: true,
        },
        birthdate:{
            type: Date,
        },
        weight:{
            type: Number,
        },
        gender:{
            type: String,
            enum: ['H', 'M'],
            required: true,
        },
        species:[{
            type: Schema.Types.ObjectId,
            ref: 'Especie'
        }],
        race:[{
            type: Schema.Types.ObjectId,
            ref: 'Race'
        }],
        sterilized:{
            type: Boolean,
            default: false,
        }

    },
    {
        timestamps: true, //Permite crear en el mongo la fecha de actualizacion y creacion
        versionKey: false, //Quitar el versionamiento de los datos
    }
)

const PatientModel = model('patient', PatientSchema)
export default PatientModel