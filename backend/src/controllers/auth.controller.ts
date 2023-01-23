import { Request, Response } from 'express';
import { encrypt, verified } from '@utils/bcrypt.handle';
import { loginUser, registerUser } from '@services/auth.service';
import { handlesHttp } from '@utils/error.handle';

/**
 * Funcion que permite registrar los usuarios del sistema
 * @param body Informacion del usuario que se va a crear 
 * @param res JSON con la informacion del usuario creado
 */
const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseRegister = await registerUser(body);
  res.send(responseRegister)
}

/**
 * Funcion que permite inciar sesion y generar un token
 * @param body Informacion del usuario que va a iniciar sesion
 * @param res JSON con la informacion del usuario que inicio sesion
 */
const loginCtrl = async ({ body }: Request, res: Response) => {
  const { user, password } = body;
  const responseUser = await loginUser({ user, password });
  res.send(responseUser)
}

export { registerCtrl, loginCtrl };
