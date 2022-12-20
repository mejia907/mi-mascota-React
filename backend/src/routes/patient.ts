import { Router } from "express"
import { deletePatient, getPatient, getPatients, postPatient, updatePatient } from "../controllers/patient.controller"

const router = Router()

router.get('/', getPatients)
router.get('/:id', getPatient)

router.post('/', postPatient)

router.put('/:id', updatePatient)

router.delete('/:id', deletePatient)

export { router }