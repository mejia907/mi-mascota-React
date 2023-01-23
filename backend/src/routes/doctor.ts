import { Router } from 'express'
import { deleteDoctor, getDoctor, getDoctors, postDoctor, updateDoctor } from '@controllers/doctor.controller'
import { checkJwt } from '@middlewares/session'

const router = Router()

router.get('/', checkJwt, getDoctors)
router.get('/:id', checkJwt, getDoctor)

router.post('/', checkJwt, postDoctor)

router.put('/:id', checkJwt, updateDoctor)

router.delete('/:id', checkJwt, deleteDoctor)

export { router }