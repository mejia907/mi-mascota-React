import { Request, Response } from 'express';
import { serialize } from 'cookie'
import { encrypt, verified } from '@utils/bcrypt.handle';
import { loginUser, registerUser } from '@services/auth.service';
import { handlesHttp } from '@utils/error.handle';
import { generateToken } from '@utils/jwt.handle';

/**
 * Funcion que permite registrar los usuarios del sistema
 * @param body Informacion del usuario que se va a crear 
 * @param res JSON con la informacion del usuario creado
 */
const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const responseRegister = await registerUser(body);
    res.status(201).json({ status: "OK", data:responseRegister })
  } catch (error) {
    handlesHttp(res, error?.status || 500, 'ERROR_POST_REQGISTER')
  }
}

/**
 * Funcion que permite inciar sesion y generar un token
 * @param body Informacion del usuario que va a iniciar sesion
 * @param res JSON con la informacion del usuario que inicio sesion
 */
const loginCtrl = async ({ body }: Request, res: Response) => {
  const { user, password } = body;
  const checkUser = await loginUser({ user, password });

  if (!checkUser) return  res.status(404).json({ status: 'FAILED', error:'NOT_FOUND_USER' })

  const passwordHash = checkUser.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return res.status(403).json({ status: 'FAILED', error:'PASSWORD_INCORRECT' })

  // Permite generar un token para la sesion del usuario
  const token = generateToken(checkUser.id, checkUser.user)

  const dataUser= {
    token,
    user: checkUser
  }
  
  res.cookie('auth', token, {
    httpOnly : true,
    //secure : true,
    sameSite : 'lax',
    maxAge : 5000 * 60 * 60 
  })

  res.json('Login')
}

export { registerCtrl, loginCtrl }
