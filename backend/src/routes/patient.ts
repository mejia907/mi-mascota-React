import { Router } from 'express'
import { deletePatient, getPatient, getPatients, postPatient, updatePatient } from '@controllers/patient.controller'
import { checkJwtCookie } from '@middlewares/session'

const router = Router()

router.get('/', checkJwtCookie, getPatients)
router.get('/:id', checkJwtCookie, getPatient)

router.post('/', checkJwtCookie, postPatient)

router.put('/:id', checkJwtCookie, updatePatient)

router.delete('/:id', checkJwtCookie, deletePatient)

export { router }