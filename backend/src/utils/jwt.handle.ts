import 'dotenv/config'
import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || ".tokenMascota.01020304"

const generateToken = (id: string, user: string) => {
  const jwt = sign({id, user}, JWT_SECRET, { expiresIn:"24h" })
  return jwt
}

const verifyToken = (jwt: string) => {
  const checkJwt = verify(jwt, JWT_SECRET)
  return checkJwt
}

export { generateToken, verifyToken }