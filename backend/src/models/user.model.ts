import { Schema, Types, model, Model } from 'mongoose';
import { User } from '@interfaces/user.interface';

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    user: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true, //Permite generar en el mongo la fecha de actualizacion y creacion
    versionKey: false //Quitar el versionamiento de los datos
  }
)

const UserModel = model('user', UserSchema)
export default UserModel
