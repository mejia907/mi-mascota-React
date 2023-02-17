import { Router } from 'express'
import { deleteClient, getClient, getClients, postClient, updateClient } from '@controllers/client.controller'
import { checkJwtCookie } from '@middlewares/session'

const router = Router()

router.get('/', checkJwtCookie, getClients)
router.get('/:id', checkJwtCookie, getClient)

router.post('/', checkJwtCookie, postClient)

router.put('/:id', checkJwtCookie, updateClient)

router.delete('/:id', checkJwtCookie, deleteClient)

export { router }