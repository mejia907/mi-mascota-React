import { Router } from 'express'
import { deleteDoctor, getDoctor, getDoctors, postDoctor, updateDoctor } from '@controllers/doctor.controller'
import { checkJwtCookie } from '@middlewares/session'

const router = Router()

router.get('/', checkJwtCookie, getDoctors)
router.get('/:id', checkJwtCookie, getDoctor)

router.post('/', checkJwtCookie, postDoctor)

router.put('/:id', checkJwtCookie, updateDoctor)

router.delete('/:id', checkJwtCookie, deleteDoctor)

export { router }