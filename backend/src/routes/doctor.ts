import { Router } from 'express'
import { deleteDoctor, getDoctor, getDoctors, postDoctor, updateDoctor } from '@controllers/doctor.controller'
import { checkJwt, checkJwtCookie } from '@middlewares/session'

const router = Router()

router.get('/', checkJwtCookie, getDoctors)
router.get('/:id', checkJwt, getDoctor)

router.post('/', checkJwt, postDoctor)

router.put('/:id', checkJwt, updateDoctor)

router.delete('/:id', checkJwt, deleteDoctor)

export { router }