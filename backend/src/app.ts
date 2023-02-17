import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { router } from './routes'
import db from '@config/mongo'

const PORT = process.env.PORT || 3001
const app= express()
app.use(cors({
    origin:[`${process.env.URL_FRONTEND}`],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use(router)

db().then(() => console.log("Conexion DB ready"))

app.listen(PORT, () => console.log(`Start by port ${PORT}`))