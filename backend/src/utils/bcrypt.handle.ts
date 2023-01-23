import { hash, compare } from 'bcryptjs';

/**
 * Funcion que permite encriptar la contraseña del usuario
 * @param pass Contraseña en texto plano
 */
const encrypt = async (pass: string) => {
  const passwordHash = await hash(pass, 8);
  return passwordHash;
}

const verified = async (pass: string, passHash: string) => {
  const isCorrect = await compare(pass, passHash)
  return isCorrect
}

export { encrypt, verified };
