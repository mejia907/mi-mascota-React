import "dotenv/config"
import express from "express"
import cors from "cors"

import { router } from  "./routes"
import db from "./config/mongo"

const PORT = process.env.PORT || 3001
const app= express()
app.use(cors({
    origin:['http://localhost:5173']
}))
app.use(express.json())
app.use(router)

db().then(() => console.log("Conexion DB ready"))

app.listen(PORT, () => console.log(`Inicio por el puerto ${PORT}`))