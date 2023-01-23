import { Router } from 'express'
import { readdirSync } from 'fs'

/**
 * Permite devolver la ruta del directorio de los routes
 */
const PATH_ROUTER = `${__dirname}`
const router = Router()


const clenaFileName = (filename: string) => {
    //Se divide el nombre del archivo y retorna el primer elemento del array con => shift()
    const file = filename.split('.').shift()
    return file
}

/**
 * Permite leer todos los archivos que hay dentro de un directorio
 */
readdirSync(PATH_ROUTER).filter((filename) => {
    const cleanName = clenaFileName(filename)
    if(cleanName !== 'index'){
        import(`./${cleanName}`).then((moduleRouter) =>{
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }

})


export { router }