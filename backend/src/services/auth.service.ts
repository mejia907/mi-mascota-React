import { Auth } from '@interfaces/auth.interface';
import { User } from '@interfaces/user.interface';
import UserModel from '@models/user.model';
import { encrypt, verified } from '@utils/bcrypt.handle';

/**
 * Funcion que permite crear un nuevo usuario en el sistema
 * @param User Datos del usuario a registrar
 * @returns JSON con la informacion del usuario registrado
 */
const registerUser = async ({ user, password, email, name }: User) => {
  const checkUser = await UserModel.findOne({ user })
  const checkEmail = await UserModel.findOne({ email })

  if (checkUser) return 'ALREADY_USER'
  if (checkEmail) return 'ALREADY_EMAIL'

  const passwordHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    user,
    password: passwordHash,
    email,
    name
  })

  return registerNewUser
}

/**
 * Funcion que permite inciar sesion
 * @param Auth Datos para iniciar sesion 
 * @returns Si el usuario tiene los datos correctos
 */
const loginUser = async ({ user, password }: Auth) => {
  const checkUser = await UserModel.findOne({ user })
  return checkUser
}

export { loginUser, registerUser };
