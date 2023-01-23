import { Auth } from '@interfaces/auth.interface';
import { User } from '@interfaces/user.interface';
import UserModel from '@models/user.model';
import { encrypt, verified } from '@utils/bcrypt.handle';
import { generateToken } from '@utils/jwt.handle';

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

  if (!checkUser) return 'NOT_FOUND_USER'

  const passwordHash = checkUser.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return 'PASSWORD_INCORRECT'

  // Permite generar un token para la sesion del usuario
  const token = generateToken(checkUser.id)

  const dataUser= {
    token,
    user: checkUser
  }

  return dataUser
}

export { loginUser, registerUser };
