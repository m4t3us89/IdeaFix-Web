import { Router } from 'express'

import { list,  remove, create } from '../controllers/notaController.mjs'

const router = Router()

const NAME_BASE = '/nota'

router.get(NAME_BASE , list)

router.post(NAME_BASE , create)

router.delete(NAME_BASE + '/:id',  remove)

export default router