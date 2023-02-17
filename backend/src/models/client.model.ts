import { Schema, model } from "mongoose";
import { Client } from "@interfaces/client.interface";

const ClientSchema = new Schema<Client> (
  {
    type_document: {
      type: String,
      enum: ['TI', 'CC', 'NIT' ],
      required: true,
    },
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
    telephone: {
      type: Number,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
        type: String,
        required: true,
    },
    gender: {
      type: String,
      enum: ['M', 'F'],
      required: true,
    }      
  },
  {
      timestamps: true, //Permite generar en el mongo la fecha de actualizacion y creacion
      versionKey: false, //Quitar el versionamiento de los datos
  }
)

const ClientModel = model('client', ClientSchema)
export default ClientModel