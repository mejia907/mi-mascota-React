import { Router } from "express"
import { deleteDoctor, getDoctor, getDoctors, postDoctor, updateDoctor } from "../controllers/doctor.controller"

const router = Router()

router.get('/', getDoctors)
router.get('/:id', getDoctor)

router.post('/', postDoctor)

router.put('/:id', updateDoctor)

router.delete('/:id', deleteDoctor)

export { router }